/**
 * Init features from our PVS framework.
 */

const { pvs } = window;

if (pvs) {
	pvs.initClipboard();
	pvs.initDarkMode();
	pvs.initPopup();
	pvs.initScrollProgress();
	pvs.initScrollbarWidth();
	pvs.initFilter();
	pvs.initPagination();
	pvs.initCollapse();
	pvs.initDropdown();
	pvs.registerLightbox({
		selector:
			'.kg-gallery-container, .kg-image-card, .kg-gallery-image, .post-media > .post-featured-image',
	});
	pvs.registerFeaturedVideo();
	pvs.registerTOC();

	// It is required to init navigation after filter and pagination.
	pvs.initNavigation();
}
