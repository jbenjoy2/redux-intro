const face = document.getElementById('face');
const bored = document.getElementById('bored');
const palm = document.getElementById('palm');
const cringe = document.getElementById('cringe');
const smile = document.getElementById('smile');
const body = document.querySelector('body');

bored.addEventListener('click', () => {
	store.dispatch({ type: 'BORED', payload: '(-＿-)' });
	body.style.backgroundColor = 'blue';
});
palm.addEventListener('click', () => {
	store.dispatch({ type: 'FACEPALM', payload: '(－‸ლ)' });
	body.style.backgroundColor = 'yellow';
});
cringe.addEventListener('click', () => {
	store.dispatch({ type: 'CRINGE', payload: '(-公-；)' });
	body.style.backgroundColor = 'orange';
});
smile.addEventListener('click', () => {
	store.dispatch({ type: 'CONTENT', payload: '(¬‿¬)' });
	body.style.backgroundColor = 'green';
});

const showFace = () => {
	face.innerText = store.getState().face;
};
// render initial state face
showFace();

store.subscribe(showFace);
