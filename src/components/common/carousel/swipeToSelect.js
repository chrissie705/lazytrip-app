import 'hammerjs';

export default class SwipeToSelect {
  constructor(container, onSelectItem, selectedIndex) {
    this.maxThreshold = 50; // Offset to valide swipe distance
    this.animateClass = 'animate-swipeToSelect'; // Add a transition to transform attribute, cf swipeToSelect.css
    this.index = selectedIndex || 0; // index of carousel
    this.onSelectItem = onSelectItem; // Callback when an item has been selected
    this.itemsLength = container.childElementCount; // Number of slide
    this.container = container; // Carousel container

    // Width of container
    this.container.style.width = `${100 * this.itemsLength}%`;

    // Width of a slide
    this.itemWidth = container.firstElementChild && container.firstElementChild.offsetWidth || 0;

    // Init touch events
    this.init();
  }

  /* ************************************* */
  /* INITIALIZE */
  /* ************************************* */
  init() {
    this.hammer = new window.Hammer.Manager(this.container);

    // Add horizontal recognizer
    const horizontalPan = new window.Hammer.Pan({direction: window.Hammer.DIRECTION_HORIZONTAL});
    this.hammer.add(horizontalPan);

    // Add pan listeners
    this.hammer.on('panstart', this.panstart.bind(this));
    this.hammer.on('panright', this.panmove.bind(this));
    this.hammer.on('panleft', this.panmove.bind(this));
    this.hammer.on('panend', this.panend.bind(this));
    this.hammer.on('pancancel', this.pancancel.bind(this));
  }
  update() {
    // Number of slide
    this.itemsLength = this.container.childElementCount;
    
    // Width of container
    this.container.style.width = `${100 * this.itemsLength}%`;

    // Width of a slide
    this.itemWidth = this.container.firstElementChild && this.container.firstElementChild.offsetWidth || 0;

    // Index of carousel
    this.index = Math.min(this.itemsLength, this.index);
    
    // Init container position
    this.resetContainer();
  }
  destroy() {
    this.hammer.destroy();
  }

  /* ************************************* */
  /* LISTENERS */
  /* ************************************* */
  panstart() {
    if (this.container.className.indexOf(this.animateClass) !== -1) {
      // On start, we remove animation class to prepare translation without animation on move
      this.container.className = this.container.className.replace(this.animateClass, '').trim();
    }
  }
  panmove(event) {
    if (this._isSwiping()) {
      // We translate container without animation
      this._translate(this._getOffset() + event.deltaX);
    }
  }
  panend(event) {
    if (Math.abs(event.deltaX) >= this.maxThreshold) {
      if (event.deltaX > 0) {
        this.selectPrevious();
      } else {
        this.selectNext();
      }
    } else {
      this.resetContainer();  
    }
  }
  pancancel() {
    this.resetContainer();
  }

  /* ************************************* */
  /* APIS */
  /* ************************************* */
  select(index) {
    this.index = Math.min(Math.max(0, index), this.itemsLength - 1);
    this.resetContainer();
  }
  selectNext() {
    this.index = Math.min(this.index + 1, this.itemsLength - 1);
    this.resetContainer();
  }
  selectPrevious() {
    this.index = Math.max(0, this.index - 1);
    this.resetContainer();
  }
  resetContainer() {
    // move carousel to current index
    this._translate(this._getOffset(), true);
    // callback function
    this.onSelectItem(this.index);
  }

  /* ************************************* */
  /* UTILS */
  /* ************************************* */
  _getOffset() {
    // return offset in pixel (= current index * width of item)
    return -this.index * this.itemWidth;
  }
  _isSwiping() {
    // is swiping when container hasn't animateClass class
    return this.container.className.indexOf(this.animateClass) !== -1 ? false : true;
  }
  _translate(value, withAnimation) {
    if (withAnimation) {
      // Add animateClass class, we add this class to finish swiping to an item
      if (this.container.className.indexOf(this.animateClass) === -1) {
        this.container.className = `${this.container.className} ${this.animateClass}`
      }
    }

    const prefixedTransform = window.Hammer.prefixed(document.body.style, 'transform');
    this.container.style[prefixedTransform] = `translate3d(${value}px, 0, 0)`;
  }
}
