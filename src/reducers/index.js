import { combineReducers } from 'redux'
import questions from './QuestionsReducer'
import choices from './ChoicesReducer'
import checklist from './ChecklistReducer'
import user from './UserReducer'
import userchecklist from './UserChecklistReducer'
import checklist_steps from './ChecklistStepsReducer'
import current_step from './CurrentStepReducer'


export default combineReducers({
  questions,
  checklist,
  choices,
  user,
  userchecklist,
  checklist_steps,
  current_step
})
