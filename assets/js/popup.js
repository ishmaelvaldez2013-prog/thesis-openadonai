const { on } = window.ivent;

let timeoutHide = null;

on(document, 'pvs.popup.show', (event) => {
	clearTimeout(timeoutHide);
	event.relatedTarget.style.removeProperty('display');
});

on(document, 'pvs.popup.hidden', (event) => {
	timeoutHide = setTimeout(() => {
		event.relatedTarget.style.setProperty('display', 'none');
	}, 200);
});
