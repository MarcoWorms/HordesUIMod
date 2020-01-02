function test() {
	setInterval(() => {
		[
			['1', 60],
			['2', 12],
			['3', 1.2],
			['4', 120],
			['q', 1],
			['e', 20],
			['r', 15],
			['f', 45],
		].forEach(([skillIndex, cd]) => {
			if (document.querySelector(`#sk${skillIndex} .cd`)) {
				document.querySelector(`#sk${skillIndex} .cd`).innerHTML =
					Math.ceil(
						(parseInt(document.querySelector(`#sk${skillIndex} .cd`).style.height) /
							100) *
							cd,
					) + 's';
			}
		});
	}, 100);
}

export default {
	name: 'Test',
	description: 'aaaaaaaa',
	run: test,
};
