---
name: "MazeHarvest"
date: "2025-01-29"
range: "Dec 2024 - Jan 2025"
skills:
  - "Python"
  - "Pytorch"
  - "Pygame"
  - "numpy"
  - "gymnasium"

tags:
  - "deep learning"
  - "reinforcement learning"

images:

  - "/svgs/mh_ov.svg"
  - "/images/mh_sample.png"
  - "/gifs/rdqn_vision_net.gif"

shortDescription: "A Grid based, partially observable, stochastic reinforcement learning environment."
links:
  github: "https://github.com/nonkloq/mazeharvest"
---

MazeHarvest is a grid-based survival reinforcement learning environment where an agent must manage the ecosystem by preventing the spread of toxic plants while defending itself against aggressive moles. The world operates in a toroidal space, meaning the edges wrap around seamlessly to the opposite sides, creating a fully connected environment.

Each environment instance is randomly generated, ensuring connectivity between all free cells. The moles use a multithreaded, depth-restricted A-star search algorithm combined with probabilistic logic to determine their next move. This approach ensures they explore efficiently and avoid getting stuck indefinitely. Both the moles and toxic plants are spawned randomly. For more details, visit the project repository: [MazeHarvest README](https://github.com/nonkloq/mazeharvest/blob/main/homegym/README.md).

The environment's difficulty is fully customizable, allowing users to create new modes by simply adjusting parameters. Below is a sample setup:
> easy_mode = EnvParams(
    wall_prop=0.3, 
    plant_prop=0.1, 
    mole_prop=0.05, 
    alpha=1.7, 
    step=1, 
    xalpha=0, 
    wall_distribution=standard_wall_distribution
)

> env = MazeHarvest(
    height=20, 
    width=20, 
    view_width=0.6, 
    view_length=0.75, 
    env_mode=easy_mode, 
    seed=69420, 
    num_rays=21, 
    max_steps=10000
)

For the agent, I've implemented two reinforcement learning algorithms using pytorch: Proximal Policy Optimization (PPO) and Rainbow Deep Q-Network (RDQN). Both utilize parallel environments. Full details of the implementation can be found here: [Implemented Algorithms](https://github.com/nonkloq/mazeharvest/tree/main?tab=readme-ov-file#implemented-algorithms).
