---
tags:
  - project
  - react
  - creature-field
status: in-progress
---

# Creature Field: Task List

## Setup
- [x] Clone / open the starter project and run `npm install`
- [x] Run `npm run dev` and confirm the app starts
- [x] Check that `public/images/` has the `*_sleep.png` and `*_awake.png` files (e.g. `first_sleep.png`, `first_awake.png`)
- [x] Create a shared Git repo and add all group members

## Basic level
### State
- [x] Import `useState` in `Creature`
- [x] Add `isAwake` state with initial value `false`

### Props and rendering
- [x] Make `Creature` accept `sleepImageUrl` and `awakeImageUrl` props
- [x] Pass both image props from `CreatureField` for every creature
- [ ] Use conditional rendering to pick the image based on `isAwake`

### Click behavior
- [x] Add an `onClick` handler to the creature element
- [x] Toggle `isAwake` in the handler
- [x] When waking up, generate new random `x` / `y` with `Math.random()`
- [x] Keep the new position within the field bounds (account for image size)
- [x] Store the position in state and apply it as the creature's style
- [x] Test that clicking toggles the image and moves the creature only when waking

## Advanced level
### Lift state up
- [ ] Define a creature object shape: `{ id, sleepImageUrl, awakeImageUrl, isAwake, x, y }`
- [ ] Hold an array of creature objects in `CreatureField` with `useState`
- [ ] Pass each creature's data to `Creature` as props
- [ ] Remove local `isAwake` / position state from `Creature`
- [ ] Add an `onWake` callback in `CreatureField` that updates the matching creature immutably (`map` by `id`)
- [ ] Call `onWake` from the creature's `onClick`
- [ ] Verify behavior still matches the basic level

### Feature (at least one)
- [ ] **Summary:** show "X of 5 creatures awake" (derive from the array, don't store it)
- [ ] **Background color:** change the field color when all are awake or all are asleep
- [ ] **Toggle all button:** add a "Wake all" / "Let all sleep" button that updates every creature at once
- [ ] Test the chosen feature(s) by clicking through every state

## Submission (one per group)
- [ ] Final test: no console errors or warnings
- [ ] Push the final code to the repo
- [ ] Take a screenshot with at least one creature awake
- [ ] Create a PDF with the repo URL and the screenshot
- [ ] Make a ZIP with the full project folder **without** `node_modules`, plus the PDF
- [ ] Name the ZIP with all group members' names
- [ ] One member uploads the ZIP to Moodle for the whole group