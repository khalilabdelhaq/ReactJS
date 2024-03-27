# useEffect cleanup function

React performs the cleanup when the component unmounts. However, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.”

As a side note before we continue: useEffects can be made to run once by simply passing an empty array to the dependency list. When you provide an empty array as the dependency list for useEffect, it indicates that the effect does not depend on any values from the component’s state or props. As a result, the effect will only run once, after the initial render, and it won’t run again for subsequent renders unless the component is unmounted and remounted: