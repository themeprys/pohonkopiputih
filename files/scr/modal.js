//<![CDATA[
// Demo NyroModal
$.fn.nyroModal.settings = {
  debug: false, // Show the debug in the background
  blocker: false, // Element which will be blocked by the modal
  windowResize: true, // indicates if the modal should resize when the window is resized
  modal: false, // Esc key or click backgrdound enabling or not
  type: '', // nyroModal type (form, formData, iframe, image, etc...)
  forceType: null, // Used to force the type
  from: '', // Dom object where the call come from
  hash: '', // Eventual hash in the url
  processHandler: null, // Handler just before the real process
  selIndicator: 'nyroModalSel', // Value added when a form or Ajax is sent with a filter content
  formIndicator: 'nyroModal', // Value added when a form is sent
  content: null, // Raw content if type content is used
  bgColor: '#000000', // Background color
  ajax: {}, // Ajax option (url, data, type, success will be overwritten for a form, url and success only for an ajax call)
  swf: { // Swf player options if swf type is used.
    wmode: 'transparent'
  },
  width: null, // default Width If null, will be calculate automatically
  height: null, // default Height If null, will be calculate automatically
  minWidth: 400, // Minimum width
  minHeight: 300, // Minimum height
  resizable: true, // Indicate if the content is resizable. Will be set to false for swf
  autoSizable: true, // Indicate if the content is auto sizable. If not, the min size will be used
  padding: 20, // padding for the max modal size
  regexImg: '[^\.]\.(jpg|jpeg|png|tiff|gif|bmp)\s*$', // Regex to find images
  addImageDivTitle: false, // Indicate if the div title should be inserted
  defaultImgAlt: 'Image', // Default alt attribute for the images
  setWidthImgTitle: true, // Set the width to the image title
  ltr: true, // Right to left by default. Put to false for Hebrew or Left to Right language
  gallery: null, // Gallery name if provided
  galleryLinks: '<a href="#" class="nyroModalPrev">Prev</a><a href="#"  class="nyroModalNext">Next</a>', // Use .nyroModalPrev and .nyroModalNext to set the navigation link
  galleryCounts: galleryCounts, // Callback to show the gallery count
  galleryLoop: false, // Indicate if the gallery should loop
  zIndexStart: 100,
  cssOpt: { // Default CSS option for the nyroModal Div. Some will be overwritten or updated when using IE6
    bg: {
      position: 'absolute',
      overflow: 'hidden',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%'
    },
    wrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%'
    },
    wrapper2: {
    },
    content: {
    },
    loading: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-50px',
      marginLeft: '-50px'
    }
  },
  wrap: { // Wrapper div used to style the modal regarding the content type
    div: '<div class="wrapper"></div>',
    ajax: '<div class="wrapper"></div>',
    form: '<div class="wrapper"></div>',
    formData: '<div class="wrapper"></div>',
    image: '<div class="wrapperImg"></div>',
    swf: '<div class="wrapperSwf"></div>',
    iframe: '<div class="wrapperIframe"></div>',
	iframeForm: '<div class="wrapperIframe"></div>',
    manual: '<div class="wrapper"></div>'
  },
  closeButton: '<a href="#" class="nyroModalClose" id="closeBut" title="close">Close</a>', // Adding automaticly as the first child of #nyroModalWrapper 
  title: null, // Modal title
  titleFromIframe: true, // When using iframe in the same domain, try to get the title from it
  openSelector: '.nyroModal', // selector for open a new modal. will be used to parse automaticly at page loading
  closeSelector: '.nyroModalClose', // selector to close the modal
  contentLoading: '<a href="#" class="nyroModalClose">Cancel</a>', // Loading div content
  errorClass: 'error', // CSS Error class added to the loading div in case of error
  contentError: 'The requested content cannot be loaded.<br />Please try again later.<br /><a href="#" class="nyroModalClose">Close</a>', // Content placed in the loading div in case of error
  handleError: null, // Callback in case of error
  showBackground: showBackground, // Show background animation function
  hideBackground: hideBackground, // Hide background animation function
  endFillContent: null, // Will be called after filling and wraping the content, before parsing closeSelector and openSelector and showing the content
  showContent: showContent, // Show content animation function
  endShowContent: null, // Will be called once the content is shown
  beforeHideContent: null, // Will be called just before the modal closing
  hideContent: hideContent, // Hide content animation function
  showTransition: showTransition, // Show the transition animation (a modal is already shown and a new one is requested)
  hideTransition: hideTransition, // Hide the transition animation to show the content
  showLoading: showLoading, // show loading animation function
  hideLoading: hideLoading, // hide loading animation function
  resize: resize, // Resize animation function
  endResize: null, // Will be called one the content is resized
  updateBgColor: updateBgColor, // Change background color animation function
  endRemove: null // Will be called once the modal is totally gone
};	
	//]]>
