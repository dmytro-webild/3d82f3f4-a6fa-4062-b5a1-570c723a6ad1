// AUTO-SYNCED from webild-backend/src/common/utils/visual-editor-script.ts
// (backend is the source of truth — it injects this script into sandbox
// index.html at bootstrap; this baked copy covers freshly generated sites
// before the first backend injection). Re-sync after backend script changes.
const SANDBOX_DOMAIN = 'sandbox.webild.io';

const visualEditorScript = (): string => {
    return `
(function() {
if (window.self === window.top) return;

if (window.__webildEditorInitialized) return;
window.__webildEditorInitialized = true;

let isActive = false;
let editorMode = 'select';
let hoveredElement = null;
let selectedElement = null;
let originalContent = null;
let isEditing = false;
let elementTypeLabel = null;
let hoverOverlay = null;

const invalidElements = ['html', 'body', 'script', 'style', 'meta', 'link', 'head', 'noscript', 'title'];
const hoverClass = 'webild-hover';
const selectedClass = 'webild-selected';

const style = document.createElement('style');
style.id = 'webild-inspector-styles';
style.textContent = '' +
  '.webild-hover {' +
  '  outline: 2px dashed #4d96ff80 !important;' +
  '  outline-offset: 2px !important;' +
  '  cursor: pointer !important;' +
  '}' +
  '.webild-selected {' +
  '  outline: 2px solid #4d96ff !important;' +
  '  outline-offset: 2px !important;' +
  '}' +
  '.webild-element-type-label {' +
  '  position: fixed !important;' +
  '  z-index: 999999 !important;' +
  '  background: #4d96ff !important;' +
  '  color: white !important;' +
  '  padding: 4px 8px !important;' +
  '  font-size: 11px !important;' +
  '  font-weight: 600 !important;' +
  '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;' +
  '  pointer-events: none !important;' +
  '  white-space: nowrap !important;' +
  '  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;' +
  '  letter-spacing: 0.3px !important;' +
  '  border: 1px solid #4d96ff20 !important;' +
  '}' +
  '.webild-element-type-label.label-top {' +
  '  border-radius: 6px 6px 0 0 !important;' +
  '}' +
  '.webild-element-type-label.label-bottom {' +
  '  border-radius: 0 0 6px 6px !important;' +
  '}' +
  '.webild-hover-overlay {' +
  '  position: fixed !important;' +
  '  background-color: #4d96ff15 !important;' +
  '  pointer-events: none !important;' +
  '  z-index: 999998 !important;' +
  '  transition: all 0.15s ease !important;' +
  '}' +
  /* Freeze CSS animations (marquees, auto-carousels) while the editor is
     active: selection outlines live on the elements, but the type label,
     hover overlay and the parent-side toolbar are positioned from a
     point-in-time rect — on a moving element they detach immediately, and
     click targeting by coordinates misses. Static canvas while editing;
     resumes on deactivate. */
  'html.webild-editing *,' +
  'html.webild-editing *::before,' +
  'html.webild-editing *::after {' +
  '  animation-play-state: paused !important;' +
  '}';
document.head.appendChild(style);

const getUniqueSelector = (element, assignId = false) => {
  if (element.dataset && element.dataset.webildSelector) {
    return element.dataset.webildSelector;
  }

  const existingId = element.getAttribute('data-webild-id');
  if (existingId) {
    return '[data-webild-id="' + existingId + '"]';
  }

  if (assignId) {
    const uniqueId = 'webild-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    element.setAttribute('data-webild-id', uniqueId);
    return '[data-webild-id="' + uniqueId + '"]';
  }

  return null;
};

const getSectionId = (element) => {
  let current = element;
  while (current && current !== document.body) {
    // data-webild-section is Bob-AI's section marker — after Bob inlines or
    // rewrites a section the original data-section wrapper may be gone, but
    // his wrapper still identifies the section.
    const sectionId =
      current.getAttribute('data-section') || current.getAttribute('data-webild-section');
    if (sectionId) {
      return sectionId;
    }
    current = current.parentElement;
  }
  // No data-section ancestor (e.g. chrome outside any section). Return null —
  // NEVER default to 'hero', which silently misattributes navbar/footer edits
  // to the hero section and corrupts it. Navbar/footer components carry their
  // own data-section ("navbar"/"footer"); anything still unattributed is left
  // sectionless so the editor fails safe instead of editing the wrong block.
  return null;
};

const getElementType = (element) => {
const tagName = element.tagName.toLowerCase();
const computedStyle = window.getComputedStyle(element);

if (tagName === 'img') {
  return 'Image';
}

if (tagName === 'video') {
  return 'Video';
}

const backgroundImage = computedStyle.backgroundImage;
if (backgroundImage && backgroundImage !== 'none') {
  const urlMatch = backgroundImage.match(/url(['"]?([^'")]+)['"]?)/);
  if (urlMatch && urlMatch[1] && !urlMatch[1].includes('gradient')) {
    const area = element.offsetWidth * element.offsetHeight;
    const hasReasonableSize = area > 1000;
    const hasFewChildren = element.children.length <= 2;

    if (hasReasonableSize && hasFewChildren) {
      return 'Image';
    }
  }
}

  const hasMediaChildren = !!element.querySelector('img, video');
  if (tagName === 'button') return hasMediaChildren ? 'Div' : 'Button';
  if (tagName === 'a' && element.getAttribute('href')) return hasMediaChildren ? 'Div' : 'Button';
  if (element.getAttribute('role') === 'button') return hasMediaChildren ? 'Div' : 'Button';

  const buttonClasses = ['btn', 'button', 'cta', 'action-button'];
  const hasButtonClass = buttonClasses.some(cls =>
    element.classList.contains(cls) || element.classList.contains('btn-' + cls)
  );

  if (hasButtonClass && element.textContent && element.textContent.trim().length > 0) {
    return 'Button';
  }

  const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'li'];
  if (textTags.includes(tagName)) {
    return 'Text';
  }

  if (tagName === 'div') {
    const hasDirectText = Array.from(element.childNodes).some(node =>
      node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim().length > 0
    );

    if (hasDirectText && !element.querySelector('div, section, article, main, header, footer')) {
      return 'Text';
    }

    return 'Div';
  }

  if (tagName === 'article') {
    return 'Article';
  }

  if (tagName === 'a' && !element.getAttribute('href')) {
    return 'Text';
  }

  return 'Section';
};

const extractOriginalUrl = (url) => {
  if (!url) return url;

  if (url.includes('/_next/')) {
    try {
      const urlObj = new URL(url);
      const originalPath = urlObj.searchParams.get('url');
      if (originalPath) {
        return originalPath;
      }
    } catch (e) {
      return url;
    }
  }

  if (url.includes('.${SANDBOX_DOMAIN}')) {
    try {
      const urlObj = new URL(url);
      return urlObj.pathname;
    } catch (e) {
      return url;
    }
  }

  return url;
};

const getMediaTypeFromUrl = (url) => {
  const videoExts = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.m4v', '.wmv'];
  const imageExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico', '.tiff', '.avif'];
  try {
    const pathname = new URL(url).pathname.toLowerCase();
    if (videoExts.some(function(ext) { return pathname.endsWith(ext); })) return 'video';
    if (imageExts.some(function(ext) { return pathname.endsWith(ext); })) return 'image';
  } catch(e) {}
  return 'unknown';
};

const swapMediaElement = (oldEl, newTag, newSrc) => {
  const newEl = document.createElement(newTag);
  Array.from(oldEl.attributes).forEach(function(attr) {
    if (attr.name !== 'src' && attr.name !== 'alt' && attr.name !== 'srcset' && attr.name !== 'autoplay' && attr.name !== 'loop' && attr.name !== 'muted' && attr.name !== 'playsinline') {
      try { newEl.setAttribute(attr.name, attr.value); } catch(e) {}
    }
  });
  newEl.style.cssText = oldEl.style.cssText;
  if (newTag === 'video') {
    newEl.setAttribute('autoplay', '');
    newEl.setAttribute('loop', '');
    newEl.setAttribute('muted', '');
    newEl.setAttribute('playsinline', '');
  }
  newEl.src = newSrc;
  if (oldEl.parentNode) {
    oldEl.parentNode.replaceChild(newEl, oldEl);
  }
  return newEl;
};

const getElementInfo = (element, assignId = false) => {
  const rect = element.getBoundingClientRect();
  const tagName = element.tagName.toLowerCase();
  const selector = getUniqueSelector(element, assignId);
  const sectionId = getSectionId(element);

  let className = undefined;
  try {
    if (element.className) {
      if (typeof element.className === 'string') {
        className = element.className;
      } else if (element.className.baseVal !== undefined) {
        className = element.className.baseVal;
      }
    }
  } catch (e) {}

  const info = {
    tagName: tagName,
    id: element.id || undefined,
    className: className,
    selector: selector,
    elementType: null,
    sectionId: sectionId,
    boundingBox: {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    }
  };

  if (tagName === 'img') {
    const originalSrc = extractOriginalUrl(element.src);
    info.imageData = {
      src: originalSrc,
      alt: element.alt || undefined,
      naturalWidth: element.naturalWidth,
      naturalHeight: element.naturalHeight,
      isBackground: false
    };
  }

  if (tagName === 'video') {
    const rawSrc = element.src || element.currentSrc || (element.querySelector('source') && element.querySelector('source').src) || '';
    const resolvedSrc = extractOriginalUrl(rawSrc);
    info.imageData = {
      src: resolvedSrc,
      alt: element.getAttribute('aria-label') || undefined,
      isBackground: false,
      isVideo: true
    };
  }

  const computedStyle = window.getComputedStyle(element);
  const backgroundImage = computedStyle.backgroundImage;
  if (backgroundImage && backgroundImage !== 'none') {
    const urlMatch = backgroundImage.match(/url(['"]?([^'")]+)['"]?)/);
    if (urlMatch) {
      const originalBgSrc = extractOriginalUrl(urlMatch[1]);
      if (tagName !== 'img') {
        info.imageData = {
          src: originalBgSrc,
          isBackground: true
        };
      } else {
        if (!info.imageData) info.imageData = {};
        info.imageData.backgroundImageSrc = originalBgSrc;
      }
    }
  }

  const elementType = getElementType(element);
  info.elementType = elementType;

  // Helpful preview for LLM context (not limited to Text/Button nodes).
  // Prefer innerText when available (closer to what users see), fall back to textContent.
  try {
    const previewRaw = (element.innerText || element.textContent || '').trim();
    if (previewRaw) {
      info.innerText =
        previewRaw.length > 400 ? previewRaw.slice(0, 400) + '...' : previewRaw;
    }
  } catch (e) {}

  if (elementType === 'Button') {
    const buttonText = element.textContent?.trim() || element.value || element.getAttribute('aria-label') || '';
    const buttonHref = element.getAttribute('href') ||
                      element.getAttribute('data-href') ||
                      element.getAttribute('onclick') ||
                      element.dataset?.link ||
                      undefined;

    info.buttonData = {
      text: buttonText,
      href: buttonHref
    };
  }

  if (elementType === 'Text') {
    info.textContent = element.textContent || '';
  }

  // Source tracking (no build-time plugins required):
  // - data-webild-id is assigned on click for DOM selector stability.
  // - data-webild-component-path + data-webild-component should be provided
  //   on a section/page wrapper (one place where sections are rendered).
  // - data-webild-source (file:line:col) is optional and only available if
  //   a build pipeline injects it.
  const elementSourceAttr = element.getAttribute('data-webild-source');

  let componentPath = null;
  let componentName = null;
  let cur = element;
  while (cur && cur !== document.body) {
    const p = cur.getAttribute && cur.getAttribute('data-webild-component-path');
    const n = cur.getAttribute && cur.getAttribute('data-webild-component');
    if (p || n) {
      componentPath = p || null;
      componentName = n || (p ? p.split('/').pop().replace(/\\.tsx?$/, '') : null);
      break;
    }
    cur = cur.parentElement;
  }

  info.source = {
    element: elementSourceAttr || null,
    component: componentPath,
    componentName: componentName
  };

  return info;
};

const isValidElement = (element) => {
  if (!isActive) return false;
  const tagName = element.tagName?.toLowerCase();
  if (invalidElements.includes(tagName)) return false;
  const isImage = tagName === 'img';
  const isVideo = tagName === 'video';
  if (isImage || isVideo) return true;
  const hasInnerHTML = element.innerHTML && element.innerHTML.trim().length > 0;
  const hasTextContent = element.textContent && element.textContent.trim().length > 0;
  const hasChildren = element.children && element.children.length > 0;
  if (!hasInnerHTML && !hasTextContent && !hasChildren) {
    return false;
  }
  const hasBackgroundImage = window.getComputedStyle(element).backgroundImage !== 'none';
  if (hasBackgroundImage && !hasChildren && !hasTextContent) {
    return editorMode === 'image';
  }

  return true;
};

const getMostSpecificElement = (x, y, options) => {
  const preferMedia = !!(options && options.preferMedia);
  const elements = document.elementsFromPoint(x, y);
  const validElements = elements.filter(el =>
    isValidElement(el) &&
    !el.classList.contains('webild-hover-overlay') &&
    !el.classList.contains('webild-element-type-label')
  );

  if (validElements.length === 0) return null;

  if (preferMedia) {
    const topMedia = validElements.find(function(el) {
      return el && (el.tagName === 'IMG' || el.tagName === 'VIDEO');
    });
    if (topMedia) return topMedia;
  }

  const scoredElements = validElements.map(element => {
    let score = 0;
    const rect = element.getBoundingClientRect();
    const tagName = element.tagName.toLowerCase();
    const computedStyle = window.getComputedStyle(element);
    const zOrder = validElements.length - validElements.indexOf(element); // higher when closer to top
    let depth = 0;
    let current = element;
    while (current && current !== document.body) {
      depth++;
      current = current.parentElement;
    }
    score += zOrder * 1000;
    score += depth * 2;
    const hasDirectText = Array.from(element.childNodes).some(node =>
      node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim().length > 0
    );

    const hasImages = element.tagName === 'IMG' || element.tagName === 'VIDEO' || computedStyle.backgroundImage !== 'none' || element.querySelector('img') || element.querySelector('video');
    const isInteractive = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName);
    const hasFewChildren = element.children.length <= 3;
    const area = rect.width * rect.height;
    const viewportArea = window.innerWidth * window.innerHeight;
    const isSmallElement = area < viewportArea * 0.1;
    if (hasDirectText) score += 20;
    if (hasImages) score += 15;
    if (element.tagName === 'IMG' || element.tagName === 'VIDEO') score += 50;
    if (isInteractive) score += 25;
    if (hasFewChildren) score += 10;
    if (isSmallElement) score += 5;
    if (area > viewportArea * 0.3) score -= 30;
    if (element.hasAttribute('data-section') || element.hasAttribute('data-webild-section')) score -= 15;
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) score += 20;
    if (['p', 'span', 'label'].includes(tagName)) score += 15;
    if (tagName === 'div' && !hasDirectText && element.children.length > 2) score -= 10;

    return { element, score };
  });
  scoredElements.sort((a, b) => b.score - a.score);

  const best = scoredElements[0]?.element || validElements[0];
  if (!best) return best;
  return best;
};

const isTextElement = (element) => {
  const elementType = getElementType(element);
  return elementType === 'Text';
};

const isImageTarget = (element) => {
  if (!element || !element.tagName) return false;
  const tag = element.tagName.toLowerCase();
  if (tag === 'img' || tag === 'video') return true;
  const bg = window.getComputedStyle(element).backgroundImage;
  return !!(bg && bg !== 'none' && bg.indexOf('url(') !== -1 && bg.indexOf('gradient') === -1);
};

const getModeTarget = (x, y, fallback, preferMedia) => {
  if (editorMode === 'image') {
    const raw = getMostSpecificElement(x, y, { preferMedia: true }) || fallback;
    return isImageTarget(raw) ? raw : null;
  }
  const raw = getMostSpecificElement(x, y, { preferMedia: !!preferMedia }) || fallback;
  const normalized = getIconContainerElement(raw);
  const target = getTextContainerElement(normalized);
  if (editorMode === 'text') {
    return isTextElement(target) ? target : null;
  }
  return target;
};

const isButtonElement = (element) => {
  const elementType = getElementType(element);
  return elementType === 'Button';
};

const updateButtonText = (element, newText) => {
  const textNodes = [];
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null
  );

  let node;
  while (node = walker.nextNode()) {
    if (node.textContent && node.textContent.trim()) {
      textNodes.push(node);
    }
  }

  if (textNodes.length > 0) {
    textNodes[0].textContent = newText;
    for (let i = 1; i < textNodes.length; i++) {
      textNodes[i].textContent = '';
    }
  } else {
    element.textContent = newText;
  }
};

const getTextContainerElement = (element) => {
  // Many animation libs wrap each word/char in nested spans.
  // In those cases we want to edit/select the *container* (e.g. h1/p),
  // not the individual span node.
  if (!element) return element;

  const containerTags = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'label']);
  let current = element;
  let best = null;

  while (current && current !== document.body) {
    if (current.nodeType !== 1) break;
    const tag = current.tagName ? current.tagName.toLowerCase() : '';

    if (isTextElement(current)) {
      // Prefer a semantic container over span.
      if (containerTags.has(tag)) {
        best = current;
        break;
      }
      if (tag !== 'span' && !best) {
        best = current;
      }
      if (tag === 'span' && !best) {
        best = current;
      }
    }

    current = current.parentElement;
  }

  return best || element;
};

const getIconContainerElement = (element) => {
  // Icon libraries often render <svg><path/></svg>. Selecting the SVG itself is
  // rarely what we want in the visual editor; users usually want the parent
  // button/card/etc. If you truly need the SVG, you can still target it via DOM
  // inspector outside of this tool.
  if (!element) return element;
  if (element.nodeType !== 1) return element;

  let svg = null;
  try {
    if (element.tagName && element.tagName.toLowerCase() === 'svg') svg = element;
    else if (element.closest) svg = element.closest('svg');
  } catch (e) {}

  if (!svg) return element;

  let cur = svg.parentElement;
  while (cur && cur !== document.body) {
    if (isValidElement(cur)) return cur;
    cur = cur.parentElement;
  }

  return element;
};

const makeEditable = (element, clickEvent) => {
  if (!isTextElement(element)) return;
  // Fired from a 50ms timer after click — the selection may have moved or
  // been toggled off meanwhile (fast double-clicks). Going editable then
  // would set isEditing=true with a stale/null selectedElement, wedging the
  // editor (clicks eaten, blur/Escape guards never match).
  if (element !== selectedElement) return;

  originalContent = element.textContent;
  element.contentEditable = 'true';

  if (!element.dataset.webildOriginalWhiteSpace) {
    const computedStyle = window.getComputedStyle(element);
    element.dataset.webildOriginalWhiteSpace = computedStyle.whiteSpace;
    element.dataset.webildOriginalWordWrap = computedStyle.wordWrap;
    element.dataset.webildOriginalOverflowWrap = computedStyle.overflowWrap;
    element.dataset.webildOriginalOverflow = computedStyle.overflow;
  }

  element.style.whiteSpace = 'pre-wrap';
  element.style.wordWrap = 'break-word';
  element.style.overflowWrap = 'break-word';
  element.style.overflow = 'visible';

  element.focus();
  isEditing = true;

  window.parent.postMessage({
    type: 'webild-text-editing-started',
    data: { selector: getElementInfo(element).selector }
  }, '*');

  const handleBeforeInput = (e) => {
    // Prevent deletion if it would leave the element empty
    const currentText = element.textContent || '';
    const inputType = e.inputType;

    // Check if this is a delete operation that would leave the element empty
    if ((inputType === 'deleteContentBackward' || inputType === 'deleteContentForward' || inputType === 'deleteByCut') && currentText.length <= 1) {
      e.preventDefault();
      element.textContent = ' ';
      // Move cursor to the beginning
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(element.firstChild || element, 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  const handleInput = () => {
    const elementInfo = getElementInfo(element);
    let currentText = element.textContent;

    // Ensure there's always at least a space to keep the element editable
    if (currentText === '' || currentText === null || currentText.length === 0) {
      element.textContent = ' ';
      currentText = ' ';
      // Move cursor to the beginning
      try {
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(element.firstChild || element, 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      } catch (e) {
        // Ignore cursor positioning errors
      }
    }

    window.parent.postMessage({
      type: 'webild-element-changed',
      data: {
        type: 'updateText',
        selector: elementInfo.selector,
        oldValue: originalContent,
        newValue: currentText,
        elementType: elementInfo.elementType,
        sectionId: elementInfo.sectionId,
        timestamp: Date.now()
      }
    }, '*');

    if (currentText !== originalContent) {
      window.parent.postMessage({
        type: 'webild-text-changed',
        data: {
          selector: elementInfo.selector,
          hasChanges: true
        }
      }, '*');
    }
  };

  element.addEventListener('beforeinput', handleBeforeInput);
  element.addEventListener('input', handleInput);
  element.dataset.inputHandler = 'true';
  element.dataset.beforeInputHandler = 'true';
};

const makeUneditable = (element, save = false) => {
  if (!element || element.contentEditable !== 'true') return;

  element.contentEditable = 'false';
  isEditing = false;

  if (element.dataset.webildOriginalWhiteSpace) {
    element.style.whiteSpace = element.dataset.webildOriginalWhiteSpace === 'normal' ? '' : element.dataset.webildOriginalWhiteSpace;
    delete element.dataset.webildOriginalWhiteSpace;
  }
  if (element.dataset.webildOriginalWordWrap) {
    element.style.wordWrap = element.dataset.webildOriginalWordWrap === 'normal' ? '' : element.dataset.webildOriginalWordWrap;
    delete element.dataset.webildOriginalWordWrap;
  }
  if (element.dataset.webildOriginalOverflowWrap) {
    element.style.overflowWrap = element.dataset.webildOriginalOverflowWrap === 'normal' ? '' : element.dataset.webildOriginalOverflowWrap;
    delete element.dataset.webildOriginalOverflowWrap;
  }
  if (element.dataset.webildOriginalOverflow) {
    element.style.overflow = element.dataset.webildOriginalOverflow === 'visible' ? '' : element.dataset.webildOriginalOverflow;
    delete element.dataset.webildOriginalOverflow;
  }

  if (element.dataset.beforeInputHandler === 'true') {
    element.removeEventListener('beforeinput', () => {});
    delete element.dataset.beforeInputHandler;
  }

  if (element.dataset.inputHandler === 'true') {
    element.removeEventListener('input', () => {});
    delete element.dataset.inputHandler;
  }

  window.parent.postMessage({
    type: 'webild-text-editing-ended',
    data: { selector: getElementInfo(element).selector }
  }, '*');

  if (save && originalContent !== element.textContent) {
    const elementInfo = getElementInfo(element);
    let finalText = element.textContent;

    // Trim the final text and convert space-only to empty string for saving
    if (finalText === ' ' || finalText.trim() === '') {
      finalText = '';
      // Update the actual element text to empty for display
      element.textContent = '';
    }

    const change = {
      type: 'updateText',
      selector: elementInfo.selector,
      oldValue: originalContent,
      newValue: finalText,
      elementType: elementInfo.elementType,
      sectionId: elementInfo.sectionId,
      timestamp: Date.now()
    };

    saveChangeToStorage(change);

    window.parent.postMessage({
      type: 'webild-element-changed',
      data: change
    }, '*');
  } else if (!save && originalContent !== null) {
    element.textContent = originalContent;
  }

  originalContent = null;
};

const createHoverOverlay = (element) => {
  const rect = element.getBoundingClientRect();
  const overlay = document.createElement('div');
  overlay.className = 'webild-hover-overlay';
  overlay.style.cssText =
    'position: fixed !important;' +
    'top: ' + (rect.top - 2) + 'px !important;' +
    'left: ' + (rect.left - 2) + 'px !important;' +
    'width: ' + (rect.width + 4) + 'px !important;' +
    'height: ' + (rect.height + 4) + 'px !important;' +
    'background-color: rgba(90, 113, 230, 0.15) !important;' +
    'pointer-events: none !important;' +
    'z-index: 999998 !important;' +
    'transition: all 0.15s ease !important;';
  document.body.appendChild(overlay);
  return overlay;
};

const removeHoverOverlay = () => {
  if (hoverOverlay) {
    hoverOverlay.remove();
    hoverOverlay = null;
  }
};

const showElementTypeLabel = (element, elementType) => {
  if (!elementType) return;

  removeElementTypeLabel();

  const rect = element.getBoundingClientRect();
  elementTypeLabel = document.createElement('div');
  elementTypeLabel.className = 'webild-element-type-label';
  const ariaLabel = element.getAttribute('aria-label');
  let labelText;

  if (elementType === 'Div') {
    labelText = 'Div';
  } else if (elementType === 'Article') {
    labelText = 'Article';
  } else if (elementType === 'Section') {
    labelText = ariaLabel || 'Section';
  } else {
    labelText = elementType;
  }

  elementTypeLabel.textContent = labelText;
  document.body.appendChild(elementTypeLabel);
  const labelRect = elementTypeLabel.getBoundingClientRect();
  let labelTop = rect.top - labelRect.height - 2;
  let labelLeft = rect.left - 3;
  let isLabelOnTop = true;
  if (labelTop < 0) {
    labelTop = rect.bottom + 1;
    isLabelOnTop = false;
  }
  if (labelTop + labelRect.height > window.innerHeight) {
    labelTop = rect.bottom - labelRect.height;
    isLabelOnTop = false;
    if (labelTop < 0) {
      labelTop = rect.top;
      isLabelOnTop = true;
    }
  }
  if (labelLeft + labelRect.width > window.innerWidth) {
    labelLeft = window.innerWidth - labelRect.width;
  }
  if (labelLeft < 0) {
    labelLeft = 0;
  }
  if (isLabelOnTop) {
    elementTypeLabel.classList.add('label-top');
  } else {
    elementTypeLabel.classList.add('label-bottom');
  }

  elementTypeLabel.style.cssText =
    'left: ' + labelLeft + 'px !important;' +
    'top: ' + labelTop + 'px !important;' +
    'transform: none !important;';
};

const removeElementTypeLabel = () => {
  if (elementTypeLabel) {
    elementTypeLabel.remove();
    elementTypeLabel = null;
  }
};

const handleMouseOver = (e) => {
  if (!isActive) return;

  const target = getModeTarget(e.clientX, e.clientY, e.target, !!e.altKey);

  if (!target || !isValidElement(target) || target === hoveredElement || target === selectedElement) {
    return;
  }

  if (hoveredElement && hoveredElement !== selectedElement) {
    hoveredElement.classList.remove(hoverClass);
    if (hoveredElement.dataset.webildOriginalPosition) {
      hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
      delete hoveredElement.dataset.webildOriginalPosition;
    }
    removeHoverOverlay();
    removeElementTypeLabel();
  }

  hoveredElement = target;

  const computedStyle = window.getComputedStyle(target);
  const currentPosition = computedStyle.position;

  if (currentPosition === 'static' || currentPosition === '') {
    hoveredElement.dataset.webildOriginalPosition = currentPosition || 'none';
    hoveredElement.style.position = 'relative';
  }

  hoveredElement.classList.add(hoverClass);

  if (!selectedElement || selectedElement !== target) {
    hoverOverlay = createHoverOverlay(target);
  }

  const elementType = getElementType(target);
  showElementTypeLabel(target, elementType);

  window.parent.postMessage({
    type: 'webild-element-hover',
    data: getElementInfo(target, false)
  }, '*');
};

const handleMouseOut = (e) => {
  if (!isActive) return;

  if (hoveredElement && hoveredElement !== selectedElement) {
    hoveredElement.classList.remove(hoverClass);

    if (hoveredElement.dataset.webildOriginalPosition) {
      hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
      delete hoveredElement.dataset.webildOriginalPosition;
    }

    removeHoverOverlay();
    removeElementTypeLabel();

    hoveredElement = null;

    window.parent.postMessage({
      type: 'webild-element-hover',
      data: null
    }, '*');
  }
};

const handleClick = (e) => {
if (!isActive) return;

if (isEditing) {
  e.stopPropagation();
  return;
}

e.preventDefault();
e.stopPropagation();

const target = getModeTarget(e.clientX, e.clientY, e.target, !!e.altKey);
if (!target || !isValidElement(target)) return;

  if (selectedElement && selectedElement !== target) {
    makeUneditable(selectedElement, false);
    selectedElement.classList.remove(selectedClass);
    selectedElement.classList.remove(hoverClass);

    if (selectedElement.dataset.webildOriginalPosition) {
      selectedElement.style.position = selectedElement.dataset.webildOriginalPosition === 'none' ? '' : selectedElement.dataset.webildOriginalPosition;
      delete selectedElement.dataset.webildOriginalPosition;
    }

    removeHoverOverlay();
    removeElementTypeLabel();
  }

  if (selectedElement === target) {
    // Toggle-deselect (e.g. a double-click): the highlight class must go
    // too — leaving it painted the element as selected forever while the
    // state/chat said nothing was selected, stacking up "ghost" selections.
    target.classList.remove(selectedClass);
    target.classList.remove(hoverClass);
    if (target.dataset.webildOriginalPosition) {
      target.style.position = target.dataset.webildOriginalPosition === 'none' ? '' : target.dataset.webildOriginalPosition;
      delete target.dataset.webildOriginalPosition;
    }

    removeHoverOverlay();
    removeElementTypeLabel();

    selectedElement = null;
    window.parent.postMessage({
      type: 'webild-element-selected',
      data: null
    }, '*');
    return;
  }

  selectedElement = target;
  selectedElement.classList.add(selectedClass);

  removeHoverOverlay();
  removeElementTypeLabel();

  if (hoveredElement === target) {
    hoveredElement.classList.remove(hoverClass);
    hoveredElement = null;
  }

  const elementInfo = getElementInfo(target, true);
  selectedElement.dataset.webildSelector = elementInfo.selector;
  showElementTypeLabel(target, elementInfo.elementType);

  window.parent.postMessage({
    type: 'webild-element-selected',
    data: elementInfo
  }, '*');

  if (editorMode === 'text' && isTextElement(target)) {
    setTimeout(() => makeEditable(target, e), 50);
  }
};

const handleKeyDown = (e) => {
  if (!isActive) return;
  if (!isEditing || !selectedElement) return;

  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    makeUneditable(selectedElement, true);
  } else if (e.key === 'Escape') {
    e.preventDefault();
    makeUneditable(selectedElement, false);
  }
};

const handleBlur = (e) => {
  if (!isActive) return;
  if (isEditing && selectedElement && e.target === selectedElement) {
    makeUneditable(selectedElement, true);
  }
};

const handleScroll = () => {
  if (!isActive) return;

  if (hoveredElement && hoveredElement !== selectedElement) {
    hoveredElement.classList.remove(hoverClass);
    if (hoveredElement.dataset.webildOriginalPosition) {
      hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
      delete hoveredElement.dataset.webildOriginalPosition;
    }
    hoveredElement = null;

    window.parent.postMessage({
      type: 'webild-element-hover',
      data: null
    }, '*');
  }

  removeHoverOverlay();

  if (selectedElement) {
    showElementTypeLabel(selectedElement, getElementType(selectedElement));
  } else {
    removeElementTypeLabel();
  }

  // Send the selected element's fresh rect so the parent can keep the popup
  // glued to it while scrolling (instead of hiding it).
  let selectedBox = null;
  if (selectedElement) {
    const r = selectedElement.getBoundingClientRect();
    selectedBox = { x: r.left, y: r.top, width: r.width, height: r.height };
  }
  window.parent.postMessage({
    type: 'webild-iframe-scroll',
    data: selectedBox ? { boundingBox: selectedBox } : null
  }, '*');
};

const getStorageKey = () => {
  const url = new URL(window.location.href);
  const pathParts = url.pathname.split('/').filter(Boolean);
  return 'webild-changes-' + pathParts.join('-');
};

const saveChangeToStorage = (change) => {
  try {
    const storageKey = getStorageKey();
    const existingChanges = JSON.parse(localStorage.getItem(storageKey) || '[]');

    const filteredChanges = existingChanges.filter(c => {
      return !(c.oldValue === change.oldValue && c.sectionId === change.sectionId);
    });
    filteredChanges.push(change);

    localStorage.setItem(storageKey, JSON.stringify(filteredChanges));

    window.parent.postMessage({
      type: 'webild-change-saved-locally',
      data: { change, allChanges: filteredChanges }
    }, '*');
  } catch (error) {
    console.error('Failed to save change to localStorage:', error);
  }
};

const clearLocalChanges = () => {
  try {
    const storageKey = getStorageKey();
    localStorage.removeItem(storageKey);
    window.parent.postMessage({
      type: 'webild-local-changes-cleared',
      data: {}
    }, '*');
  } catch (error) {
    console.error('Failed to clear local changes:', error);
  }
};


// ── Locate/highlight support for skipped visual edits ──────────────────
// The runtime selector dies on every Fast Refresh, so fall back to a text
// search: the DOM shows newValue while the live edit is still applied, or
// oldValue after HMR reverted it. Button edits store JSON {text, href}.
const editedText = (value) => {
  try {
    const parsed = JSON.parse(value);
    if (parsed && typeof parsed.text === 'string') return parsed.text;
  } catch (err) { /* plain text */ }
  return value || '';
};

const findEditedElement = (item) => {
  if (item.selector) {
    try {
      const bySelector = document.querySelector(item.selector);
      if (bySelector) return bySelector;
    } catch (err) { /* invalid selector */ }
  }
  const scope = (item.sectionId && (
    document.querySelector('[data-section="' + item.sectionId + '"]') ||
    document.querySelector('[data-webild-section="' + item.sectionId + '"]')
  )) || document;
  const oldText = editedText(item.oldValue).trim();
  const newText = editedText(item.newValue).trim();
  const candidates = scope.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, div');
  for (let i = 0; i < candidates.length; i++) {
    const text = (candidates[i].textContent || '').trim();
    if (text && (text === oldText || text === newText)) return candidates[i];
  }
  return null;
};

const highlightElement = (element) => {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const prevOutline = element.style.outline;
  const prevOffset = element.style.outlineOffset;
  element.style.outline = '3px solid #ef4444';
  element.style.outlineOffset = '4px';
  setTimeout(() => {
    element.style.outline = prevOutline;
    element.style.outlineOffset = prevOffset;
  }, 4000);
};

const handleMessage = (e) => {
  if (!e.data || !e.data.type) return;

  if (e.data.type === 'webild-activate-editor') {
    if (!isActive) {
      isActive = true;
      document.documentElement.classList.add('webild-editing');
      window.parent.postMessage({ type: 'webild-editor-activated' }, '*');
    }
    return;
  }

  if (e.data.type === 'webild-set-editor-mode') {
    const requested = e.data.data && e.data.data.mode;
    editorMode = requested === 'text' || requested === 'image' ? requested : 'select';

    if (selectedElement) {
      makeUneditable(selectedElement, false);
      selectedElement.classList.remove(selectedClass);
      if (selectedElement.dataset.webildOriginalPosition) {
        selectedElement.style.position = selectedElement.dataset.webildOriginalPosition === 'none' ? '' : selectedElement.dataset.webildOriginalPosition;
        delete selectedElement.dataset.webildOriginalPosition;
      }
      selectedElement = null;
      window.parent.postMessage({
        type: 'webild-element-selected',
        data: null
      }, '*');
    }
    if (hoveredElement) {
      hoveredElement.classList.remove(hoverClass);
      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }
      hoveredElement = null;
    }
    removeHoverOverlay();
    removeElementTypeLabel();

    window.parent.postMessage({
      type: 'webild-editor-mode-changed',
      data: { mode: editorMode }
    }, '*');
    return;
  }

  if (e.data.type === 'webild-deactivate-editor') {
    if (isActive) {
      isActive = false;
      editorMode = 'select';
      document.documentElement.classList.remove('webild-editing');

      if (selectedElement) {
        makeUneditable(selectedElement, false);
        selectedElement.classList.remove(selectedClass);
        selectedElement = null;
      }
      if (hoveredElement) {
        hoveredElement.classList.remove(hoverClass);
        hoveredElement = null;
      }

      removeHoverOverlay();
      removeElementTypeLabel();
      window.parent.postMessage({ type: 'webild-editor-deactivated' }, '*');
    }
    return;
  }

  if (e.data.type === 'webild-clear-local-changes') {
    clearLocalChanges();
    return;
  }

  if (e.data.type === 'webild-locate-elements') {
    const req = e.data.data || {};
    const results = (req.items || []).map((item) => {
      const element = findEditedElement(item);
      if (!element) return { id: item.id, found: false };
      if (req.highlight) highlightElement(element);
      return {
        id: item.id,
        found: true,
        selector: getUniqueSelector(element, true) || item.selector || null,
        source: element.getAttribute('data-webild-source') || null,
      };
    });
    window.parent.postMessage({
      type: 'webild-elements-located',
      data: { requestId: req.requestId, results: results }
    }, '*');
    return;
  }

  if (e.data.type === 'webild-cancel-changes') {
    try {
      const storageKey = getStorageKey();
      const savedChanges = localStorage.getItem(storageKey);
      if (savedChanges) {
        const changes = JSON.parse(savedChanges);
        changes.forEach(change => {
          try {
            const element = document.querySelector(change.selector);
            if (!element) return;

            if (change.type === 'updateText') {
              if (isTextElement(element)) {
                element.textContent = change.oldValue;
              }
            } else if (change.type === 'updateButton') {
              if (isButtonElement(element)) {
                updateButtonText(element, change.oldValue);
              }
            } else if (change.type === 'replaceImage') {
              const revertTag = element.tagName.toLowerCase();
              const isBackground = revertTag !== 'img' && revertTag !== 'video';
              if (isBackground) {
                element.style.backgroundImage = change.oldValue ? 'url(' + change.oldValue + ')' : '';
              } else {
                const oldMediaType = getMediaTypeFromUrl(change.oldValue);
                if (revertTag === 'video' && oldMediaType === 'image') {
                  swapMediaElement(element, 'img', change.oldValue);
                } else if (revertTag === 'img' && oldMediaType === 'video') {
                  swapMediaElement(element, 'video', change.oldValue);
                } else if (revertTag === 'video') {
                  element.src = change.oldValue;
                  element.load();
                } else {
                  element.src = change.oldValue;
                }
              }
            }
          } catch (err) {
            console.warn('[Webild] Failed to revert change:', err);
          }
        });
      }
      clearLocalChanges();
    } catch (error) {
      console.error('[Webild] Failed to cancel changes:', error);
    }
    return;
  }

  if (e.data.type === 'webild-update-text') {
    const { selector, newValue, oldValue, sectionId } = e.data.data;
    try {
      let element = null;

      if (selectedElement && isTextElement(selectedElement)) {
        element = selectedElement;
      }
      else if (selector) {
        try {
          element = document.querySelector(selector);
        } catch (err) {
          console.warn('[Webild] Invalid selector:', selector);
        }
      }

      if (!element && sectionId) {
        const sectionElement =
          document.querySelector('[data-section="' + sectionId + '"]') ||
          document.querySelector('[data-webild-section="' + sectionId + '"]');
        if (sectionElement) {
          const textElements = sectionElement.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, div');
          for (let i = 0; i < textElements.length; i++) {
            const el = textElements[i];
            if (isTextElement(el) && el.textContent.trim() === (oldValue || '').trim()) {
              element = el;
              const newSelector = getUniqueSelector(element, true);
              if (newSelector) {
                element.dataset.webildSelector = newSelector;
              }
              break;
            }
          }
        }
      }

      if (element && isTextElement(element)) {
        element.textContent = newValue;
        const finalSelector = element.dataset.webildSelector || getUniqueSelector(element, true);

        window.parent.postMessage({
          type: 'webild-text-update-success',
          data: {
            selector: finalSelector,
            newValue: newValue
          }
        }, '*');
      } else {
        window.parent.postMessage({
          type: 'webild-text-update-failed',
          data: { selector, newValue }
        }, '*');
      }
    } catch (error) {
      window.parent.postMessage({
        type: 'webild-text-update-failed',
        data: { selector, newValue, error: error.message }
      }, '*');
    }
    return;
  }

  if (e.data.type === 'webild-update-button') {
    const { selector, text, href } = e.data.data;
    try {
      const element = document.querySelector(selector);
      if (element && isButtonElement(element)) {
        if (text !== undefined) {
          updateButtonText(element, text);
        }
        if (href !== undefined) {
          if (element.tagName.toLowerCase() === 'a') {
            element.href = href;
          } else {
            element.setAttribute('data-href', href);
          }
        }
      }
    } catch (error) {
      console.error('[Webild] Invalid selector for button update:', selector, error);
    }
    return;
  }

  if (!isActive) return;

  if (e.data.type === 'webild-replace-image') {
    const { selector, newSrc, isBackground, allowMediaTypeSwap } = e.data.data;
    let element = null;

    try {
      element = document.querySelector(selector);
    } catch (error) {
      window.parent.postMessage({
        type: 'webild-image-replacement-error',
        data: { selector, message: 'Invalid selector: ' + error.message, success: false }
      }, '*');
      return;
    }

    if (!element) {
      window.parent.postMessage({
        type: 'webild-image-replacement-error',
        data: { selector, message: 'Element not found', success: false }
      }, '*');
      return;
    }

    try {
      let replaced = false;
      let oldValue = '';

      if (isBackground) {
        oldValue = window.getComputedStyle(element).backgroundImage;
        element.style.backgroundImage = 'url(\\'' + newSrc + '\\')';
        replaced = true;
      } else if (element.tagName.toLowerCase() === 'img') {
        oldValue = element.src;
        const newMediaType = getMediaTypeFromUrl(newSrc);
        if (newMediaType === 'video' && allowMediaTypeSwap) {
          const swapped = swapMediaElement(element, 'video', newSrc);
          if (selectedElement === element) selectedElement = swapped;
          element = swapped;
        } else {
          element.src = newSrc;
        }
        element.srcset = '';
        replaced = true;
      } else if (element.tagName.toLowerCase() === 'video') {
        oldValue = element.src || element.currentSrc || '';
        const newMediaType = getMediaTypeFromUrl(newSrc);
        const sources = element.querySelectorAll('source');
        if (newMediaType === 'image' && allowMediaTypeSwap) {
          const swapped = swapMediaElement(element, 'img', newSrc);
          if (selectedElement === element) selectedElement = swapped;
          element = swapped;
        } else {
          if (sources.length > 0) {
            sources.forEach(function(source) { source.src = newSrc; });
            element.load();
          } else {
            element.src = newSrc;
            element.load();
          }
        }
        replaced = true;
      } else {
        const hasBackgroundImage = window.getComputedStyle(element).backgroundImage !== 'none';
        if (hasBackgroundImage) {
          oldValue = window.getComputedStyle(element).backgroundImage;
          element.style.backgroundImage = 'url(\\'' + newSrc + '\\')';
          replaced = true;
        }
      }

      if (replaced) {
        const elementInfo = getElementInfo(element);

        let cleanOldValue = oldValue;
        if (oldValue.includes('url(')) {
          const urlMatch = oldValue.match(/url(['"]?([^'")]+)['"]?)/);
          if (urlMatch) {
            cleanOldValue = urlMatch[1];
          }
        }

        cleanOldValue = extractOriginalUrl(cleanOldValue);

        const change = {
          type: 'replaceImage',
          selector: selector,
          oldValue: cleanOldValue,
          newValue: newSrc,
          elementType: elementInfo.elementType,
          sectionId: elementInfo.sectionId,
          timestamp: Date.now()
        };

        saveChangeToStorage(change);

        window.parent.postMessage({
          type: 'webild-element-changed',
          data: change
        }, '*');

        window.parent.postMessage({
          type: 'webild-image-replaced',
          data: { selector, newSrc, success: true }
        }, '*');
      } else {
        window.parent.postMessage({
          type: 'webild-image-replacement-error',
          data: { selector, message: 'Could not determine how to replace image', success: false }
        }, '*');
      }
    } catch (error) {
      window.parent.postMessage({
        type: 'webild-image-replacement-error',
        data: { selector, message: error.message || 'Failed to replace image', success: false }
      }, '*');
    }
  }
};

document.addEventListener('mouseover', handleMouseOver, true);
document.addEventListener('mouseout', handleMouseOut, true);
document.addEventListener('click', handleClick, true);
document.addEventListener('keydown', handleKeyDown, true);
document.addEventListener('blur', handleBlur, true);
window.addEventListener('scroll', handleScroll, true);
window.addEventListener('message', handleMessage, true);

// Re-apply pending edits after React re-renders wipe direct DOM mutations.
// Carousels/marquees re-clone slides from props on scroll/interaction, so an
// edited image visually reverts to its original src mid-session even though
// the change is still pending. Re-apply targets ALL copies matching the old
// value inside the section — duplicated slides map to one source occurrence.
let reapplyTimer = null;
const reapplyPendingChanges = () => {
  try {
    const changes = JSON.parse(localStorage.getItem(getStorageKey()) || '[]');
    for (let i = 0; i < changes.length; i++) {
      const change = changes[i];
      if (!change || !change.oldValue || change.oldValue === change.newValue) continue;
      try {
        const sectionEl = change.sectionId
          ? (document.querySelector('[data-section="' + change.sectionId + '"]') ||
             document.querySelector('[data-webild-section="' + change.sectionId + '"]'))
          : null;
        const root = sectionEl || document;
        if (change.type === 'replaceImage') {
          const imgs = root.querySelectorAll('img');
          for (let j = 0; j < imgs.length; j++) {
            if (imgs[j].getAttribute('src') === change.oldValue) imgs[j].src = change.newValue;
          }
        } else if (change.type === 'updateText') {
          let el = null;
          try { el = change.selector ? root.querySelector(change.selector) : null; } catch (err) {}
          if (el && isTextElement(el) && el.textContent === change.oldValue) {
            el.textContent = change.newValue;
          }
        }
      } catch (err) {}
    }
  } catch (err) {}
};
const reapplyObserver = new MutationObserver(() => {
  if (reapplyTimer) clearTimeout(reapplyTimer);
  reapplyTimer = setTimeout(reapplyPendingChanges, 250);
});
reapplyObserver.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['src'],
});

let lastPathname = window.location.pathname;

const notifyPageChange = () => {
  window.parent.postMessage({
    type: 'webild-page-changed',
    data: { pathname: window.location.pathname }
  }, '*');
};

window.addEventListener('popstate', () => {
  if (lastPathname !== window.location.pathname) {
    lastPathname = window.location.pathname;
    notifyPageChange();
  }
}, true);

const urlCheckInterval = setInterval(() => {
  if (lastPathname !== window.location.pathname) {
    lastPathname = window.location.pathname;
    notifyPageChange();
  }
}, 500);

notifyPageChange();

window.webildCleanup = () => {
  isActive = false;
  document.documentElement.classList.remove('webild-editing');

  if (selectedElement) {
    makeUneditable(selectedElement, false);
  }

  removeHoverOverlay();
  removeElementTypeLabel();

  reapplyObserver.disconnect();
  if (reapplyTimer) {
    clearTimeout(reapplyTimer);
  }

  if (urlCheckInterval) {
    clearInterval(urlCheckInterval);
  }

  document.removeEventListener('mouseover', handleMouseOver, true);
  document.removeEventListener('mouseout', handleMouseOut, true);
  document.removeEventListener('click', handleClick, true);
  document.removeEventListener('keydown', handleKeyDown, true);
  document.removeEventListener('blur', handleBlur, true);
  window.removeEventListener('scroll', handleScroll, true);
  window.removeEventListener('message', handleMessage, true);

  document.querySelectorAll('.' + hoverClass).forEach(el => {
    el.classList.remove(hoverClass);
  });
  document.querySelectorAll('.' + selectedClass).forEach(el => {
    el.classList.remove(selectedClass);
  });

  const styleEl = document.getElementById('webild-inspector-styles');
  if (styleEl) styleEl.remove();

  hoveredElement = null;
  selectedElement = null;
};

window.parent.postMessage({ type: 'webild-editor-ready' }, '*');
})();
`;
};

export const getVisualEditScript = () => {
    return visualEditorScript().replace(/`/g, '\\`').replace(/\$/g, '\\$');
};

export const getVisualEditScriptRaw = () => {
    return visualEditorScript();
};
