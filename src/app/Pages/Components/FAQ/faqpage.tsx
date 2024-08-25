
const FAQ = () => {
    const data = [
        {
            question: "What is the purpose of this application?",
            answer: "This application is designed to provide a simple and user-friendly interface for users to interact"
        },
        {
            question: "What is the purpose of this application?",
            answer: "This application is designed to provide a simple and user-friendly interface for users to interact"
        },
        {
            question: "What is the purpose of this applicatdfdfdion?",
            answer: "This application is designed to provide a simple and user-friendly interface for users to interact"
        }
    ]
    return (
        <>
        <div>
            <h1 className=" text-center text-6xl font-bold">FAQ</h1>
            <div className="text-center h-fit border-2 w-fit p-20 align-content-lg-center justify-center m-10 border-black box-border">
               {
                 data.map((details)=> (
                   
                        <div key={details.answer}>
                        <button>
                           {details.question}
                        </button>
                        <i className="fa-solid fa-chevron-down"></i>
                        <div>
                            <p className="text-lg">{details.answer}</p>
                        </div>
                        </div>
                    )
                 )
               }
              
            </div>
        </div>
        </>
    )
}
export default FAQ