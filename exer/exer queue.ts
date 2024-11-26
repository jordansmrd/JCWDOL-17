class Queue {
    private queue: { name: string, time: number }[] = [];

    // Add food item with processing time in minutes
    addFoodItem(name: string, time: number): void {
        this.queue.push({ name, time });
    }

    // Process the queue
    async processQueue(): Promise<void> {
        while (this.queue.length > 0) {
            const item = this.queue.shift();
            if (item) {
                console.log(`Processing ${item.name} (Estimated time: ${item.time} minutes)...`);

                // Simulate processing with a random delay between 1-10 seconds
                const randomDelay = Math.floor(Math.random() * 10) + 1;
                await this.processItem(item.name, randomDelay);
            }
        }
        console.log("All orders processed!");
    }

    // Simulate processing a single food item
    private processItem(food: string, delay: number): Promise<void> {
        return new Promise((resolve) => {
            console.log(`Waiting for ${food}...`);
            setTimeout(() => {
                console.log(`${food} is ready!`);
                resolve();
            }, delay * 1000);  // Convert delay to milliseconds
        });
    }
}

// Example usage
const queue = new Queue();

// Add some food items to the queue
queue.addFoodItem("Fried Rice", 4);
queue.addFoodItem("Pizza", 30);
queue.addFoodItem("Steak", 25);
queue.addFoodItem("Beer", 5);

// Start processing the queue
queue.processQueue();
