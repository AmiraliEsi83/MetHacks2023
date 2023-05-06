// Load the JSON data
fetch('./carData.json')
	.then(response => response.json())
	.then(data => {
		// Get the HTML elements
		const manufacturerSelect = document.getElementById('manufacturer-select');
		const modelSelect = document.getElementById('model-select');
		const gasTypeSelect = document.getElementById('gas-type-select');

		// Populate the manufacturer drop-down
		for (const manufacturer in data) {
			const option = document.createElement('option');
			option.value = manufacturer;
			option.textContent = manufacturer;
			manufacturerSelect.appendChild(option);
		}

		// Update the model drop-down when a manufacturer is selected
		manufacturerSelect.addEventListener('change', () => {
			// Clear the model and gas type drop-downs
			modelSelect.innerHTML = '';
			gasTypeSelect.innerHTML = '';

			// Get the selected manufacturer and its models
			const selectedManufacturer = manufacturerSelect.value;
			const models = data[selectedManufacturer];

			// Populate the model drop-down
			for (const modelObj of models) {
				const option = document.createElement('option');
				option.value = modelObj.model;
				option.textContent = modelObj.model;
				modelSelect.appendChild(option);
			}
		});

		// Update the gas type drop-down when a model is selected
		modelSelect.addEventListener('change', () => {
			// Clear the gas type drop-down
			gasTypeSelect.innerHTML = '';

			// Get the selected manufacturer and model
			const selectedManufacturer = manufacturerSelect.value;
			const selectedModel = modelSelect.value;

			// Find the selected model object
			const models = data[selectedManufacturer];
			const selectedModelObj = models.find(modelObj => modelObj.model === selectedModel);

			// Populate the gas type drop-down
			for (const gasType of selectedModelObj.gas_type) {
				const option = document.createElement('option');
				option.value = gasType;
				option.textContent = gasType;
				gasTypeSelect.appendChild(option);
			}
		});
	})
	.catch(error => console.error(error));
