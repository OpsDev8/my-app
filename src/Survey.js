import { Survey } from 'survey-react';

const Questions = ({}) => {
    const form = {
        "pages": [
            {
                "name": 'myForm',
                "elements": [{
                    "type": 'barrating',
                    "name": 'myBarrating',
                    "choices": ["1", "2", "3", "4", "5"],
                    "ratingTheme": "fontawesome-stars",
                    "title": "1",
                    "isRequired": true
                }]
            }
        ]
    }
    
    const surveyRender = (<Survey
        json={form}
        showCompletedPage={false}
    />)
        
    return (
        <div>
            {
                surveyRender
            }
        </div>
        )
    }

export default Questions;