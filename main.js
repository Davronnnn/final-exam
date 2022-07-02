import myJson from './questions.json' assert { type: 'json' };

const input = document.querySelector('#question');
const answer = document.querySelector('#matching');

input.addEventListener('keyup', (e) => {
	const inputValue = e.target.value;
	console.log();
	const result = myJson.filter((question) =>
		question.question.toLowerCase().includes(inputValue.toLowerCase())
	);
	answer.innerHTML = '';
	if (result) {
		result.forEach((question) => {
			answer.innerHTML += `
            <div class='answer'>
                <p class='answer-question'>${
					question.number !== '' ? question.number : question.source
				} ${question.question}</p>
                <li> <strong> Javob:</strong> ${question.answer}</li>
            </div>`;
		});
	}
});
