export {
	👍: {
		description: "Move Head one space forward."
		forward: {
			action: 👍
			output: "Moving head forward"
		},
		rewind: {
			action: 👎
			output: "Moving head backwards"
		}
	}
	👎: {
		description: "Move Head one space backward."
		forward: {
			action:👎
			output: "Moving head backwards"
		},
		rewind: {
			action: 👍
			output: "Moving head forwards"
		}
	},  

	🙋: {
		description: "Print one."
		forward: {
			action: 🙋
			output: "Printing one."
		},
		rewind: {
			action: ✨
			output: "Removing one"
		},

		⭕: {
		description: "Print zero."
		forward: {
			action: ⭕
			output: "Printing zero."
		},
		rewind: {
			action: ✨
			output: "Removing zero"
		}
}