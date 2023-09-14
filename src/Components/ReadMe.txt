    **-->     !! Commands:
                rfc --> make a function with return type.


    **-->     Changing Pages / Link another page to a button, while not reloading the page is done by 
            react Router

            --> Link is used instead of anchor tag  <link/>  <-->  <a/>
                    "to" is used instaed of "href"

            <browserRouter>
                <Routes>
                    <route path=" " element={ <Home> } />
                    <route path=" " element={ <AboutMe> } />
                </Routes>
            </browserRouter>

    **-->     State/props  <-->  Hooks :
                1. State=condition of any component for eg. textarea component might be empty sometime , sometimes it has letters .
                2. Hooks= A method which helps us to use features of classes in function based component this is because developer like us
                        prefer to use function over classes.
                3. Hooks has this part ---->   const [count,setCount)=useState("Hello Universe");

                Here in above hook the value of count is Hello Universe . count is array variable so that we just can't update or change 
                its value like normal variable. 
                But we can update or change its value using setCount() method. i.e. setCount("Hey You"); this implies the value of count is updated to Hey You. 


    **-->     In a function Everything in return should be included in 1 tag only, so we use JSX tag <> </>


    **-->                 