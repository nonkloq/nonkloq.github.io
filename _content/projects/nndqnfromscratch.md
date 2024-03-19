---
name: "NN & DQN From Scratch"
date: "2023-04-13"
range: "Apr 2023"
skills:
  - "Python"
  - "Numpy"
  - "Gym"
  - "Pygame"
  - "Matplotlib"
  - "Scikit-learn"

tags:
  - "Deep Learning"
  - "Machine Learning"
  - "Reinforcement Learning"
images:
  - "/images/dqnimg.png"
  - "/gifs/cpsn500.gif"
  - "/gifs/cpsnb.gif"

shortDescription: "Implementation of Multilayerd Perceptron & Deep Q-Network from scratch"
links:
  github: "https://github.com/nonkloq/nn_dqn-from-scratch"
---


I implemented an artificial neural network using the [Stochastic Gradient Descent (SGD)]((https://en.wikipedia.org/wiki/Stochastic_gradient_descent)) algorithm with [momentum](https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Momentum) in Python only using NumPy.

The `NeuralNetwork` object can take activation functions and any architecture shape as lists.

> Example usage: `NeuralNetwork([100, 20, 10], ['sigmoid','relu','linear'], eta=0.01, momentum=0.001)`

Then, I used the neural network to develop a [Deep Q-Network (DQN)](https://aiwiki.ai/wiki/Deep_Q-Network_(DQN)) aimed at training an agent to play the [Cartpole game](https://jeffjar.me/cartpole.html).

I trained two small DQNs with the same architecture: 4x4x3x2, using 'Sigmoid', 'ReLU', and 'Linear' activations, but with different hyperparameters.

#### These are the networks:
**CartPoleScratchNet500**

- Average score: `500` 

- Hyperparameters: 
  - learning rate=5e-3
  - momentum=0.3
  - no. of episodes=300

**CartPoleScratchNetBetter**

- Score range: `500 < score < 5000`

- Hyperparameters: 
  - learning rate=5e-4
  - momentum=0
  - no. of episodes=2000
