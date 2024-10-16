# Questionnaire (en)

**Objective:** to develop an application that allows you to create questions and answer questions.

There are three types of questions:

1. Single choice - the ability to choose only one option from the proposed
2. Multiple Choice - the ability to choose several of the proposed options
3. Open - the ability to write (type) your answer

The application should consist of the following pages:

1. Question Management Page
2. Create question page
3. Question edit page
4. Lists of Questions Page

## General requirement

- Angular latest version
- Keeping the code clean (use eslint for check)
- Readable and understandable names of variables, classes, functions and methods
- Use the types `any` and `unknown` as little as possible
- Use of third-party libraries is allowed
- Everything should to be developed taking into account the fact that in the future it is possible to add other types of questions.
- All application state and all data must be stored in local storage. That is, after reloading the page, the state of the application must be restored. All previously created questions and answers must be restored.

## Pages

### 1. Question Management Page

1.1 The page displays all questions that user created
1.2 List of questions sorted from newest to oldest (newest at the top)
1.3 The page has a button to redirect to the question creation page
1.4 Each question on this page displays the text of the question, the type of question, and the date when the question was created.
1.4.1 The question also has two buttons - delete and edit.
1.4.1.1 Delete button - removes a question from the list of questions.
1.4.1.2 Edit button - redirect to the page for editing this question

### 2. Create question page

2.1 This page allows the user to create a question with any of the three question types
2.2 After creating a question, user should be redirected to the "Question Management Page"
2.3 The page has the ability to return on the "Question Management Page" at any time
2.4 The choice of the question type should be implemented by radio buttons

### 3. Question edit page

3.1. The page allows the user to edit an existing questions.
3.2 After successfully editing a question, user should be redirected to the "Question Management Page"
3.3 The page has the ability to return on the "Question Management Page" at any time

**Validation for question:**

- Question text (required, max 1000 symbols )
- Question type: Single choice, Multiple choice, Open question (required)
- Answer options - at least two (required only for the Single choice, Multiple choice types)

## Additional task (!!! Optional !!!)

### 4. Lists of Questions Page (Optional)

4.1 The page allows user to view two lists of questions (answered and unanswered lists of questions).
4.1.1 These lists divide the screen 50/50 vertically (left unanswered, right answered)
4.1.2 Answered questions list displays all answered questions that sorted by answer date (newest on top)
4.1.3 Unanswered questions list displays only unanswered questions (newest on top)

4.2 Each list displays questions in the cards view
4.2.1 When the card is in the list of unanswered questions
4.2.1.1 Question card displays the question text, answer options / text box (depending on the question type) and the button to create an answer for this question
4.2.1.2 The button for creating an answer to the question is available only when the answer for this question is valid
4.2.1.3 After creating an answer to the question, the card is removed from the list of unanswered questions and added to the list of answered questions

4.2.2 When the card is in the list of answered questions
4.2.2.1 If the card is in the list of answered questions, then the fields must be read-only and filled in according to the answer
4.2.3.2 If the card is in the list of answered questions, then it is possible to roll back the answer. In this case, the card will be removed from the list of answered and added to the list of unanswered questions 

**Validation for answers:**

- Answer depending on type
    - A single choice - only one option of the proposed
    - Multiple choice - at least one option of the proposed
    - Open question - text (from 1 to 255 characters)


# Estimate 35m

## Base 1h+1h+10m+30m+20m+15m+50m+20m+1h+10m+15m+50m+20m+15m = ~7h15m
- [ ] Create angular project install packages (depends from pc and internet connection speed) ~5-15m
- [ ] Setup it (add libs, drop default css styles) ~10-20m 
- [ ] Create project structure (generate modules, components, service, pipe, interfaces) ~30-50m
- [ ] Add interfaces of motion-item and question-item ~15m
- [ ] Add functional into date-sorting-pipe (this pipe will use in 2 cases: 1 sorting by `created_date`, 2 sorting `answered_date`) ~10m
- [ ] Add functional into fake-server-service (get data, CRUD with LS and aggregation data methods) here will 90% of business logic ~40m-1h
- [ ] Add view-question-component layout + input/output functional ~20m
- [ ] Add create-edit-question-component + input/output functional and validation of states ~50m
- [ ] Add routing betting pages modules (base routing for manage questions, create and edit it + optional answers page route) ~15m
- [ ] Add create-question-page-component layout + functional (here will reuse create-edit-question-component) ~20m
- [ ] Add edit-question-page-component layout + functional (here will reuse create-edit-question-component + fake-server-service) ~30m
- [ ] Add question-manager-page layout + functional (reuse view-question-component + fake-server-service) ~10m
- [ ] Bugs fixing ~1h
- [ ] Testing ~1h
For sure interface will used at service and components

## Optional page 15m+10m+1h+15m+30m+30m = ~2h40m
- [ ] Improve view-question-component with disabled mode ~15m
- [ ] Add layout to tabs component and redirection into answers-question-page ~5-10m
- [ ] Add layout + functional to answers-question-page 30m-1h
- [ ] Improve edit functional on change type/option/question label auto move it to unanswered (drop option to false state, clear text area - only on confirm editing) 15m
- [ ] Bugs fixing ~30m
- [ ] Testing ~30m


### Total 35m+7h15m+2h40m = ~10h.30m