const INITIAL_STATE = { face: '┐(´～｀)┌' };

const moodReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'BORED':
			return { ...state, face: action.payload };
		case 'FACEPALM':
			return { ...state, face: action.payload };
		case 'CRINGE':
			return { ...state, face: action.payload };
		case 'CONTENT':
			return { ...state, face: action.payload };
		default:
			return state;
	}
};

const store = Redux.createStore(moodReducer);
