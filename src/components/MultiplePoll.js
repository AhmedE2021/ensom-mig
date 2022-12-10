import React from 'react'
import { LeafPoll, Result } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'



const resData = [
  { id: 0, text: 'React', votes: 9 },
  { id: 1, text: 'Vue', votes: 7 },
  { id: 2, text: 'Vue', votes: 7 },
  { id: 3, text: 'Angular', votes: 2 }
  
]

const themeData = {
  textColor: '#19181f',
  mainColor: '#00B87B',
  backgroundColor: 'white',
  alignment: 'center',
  leftColor: '#00B87B',
  rightColor: '#FF2E00'
}

function vote(item: Result, results: Result[]) {
  console.log('voted', item, results)
}

const Poll = () => {
  return (
    <div className='multi-poll'
      style={{
        margin: '300px auto',
        width:'350px',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              width:'400px'
            }
          },
          {
            breakpoint: 400,
            settings: {
              width:'350px'
            }
          },
        ]
      
      }}
    >
   
      <LeafPoll
        type='multiple'
        question='Which type of loneliness did you relate most to?'
        results={resData}
        theme={themeData}
        onVote={vote}
        isVoted={false}
      />
   
    </div>
  )
}

export default Poll;