import { createTheme, MantineProvider } from "@mantine/core"
import { RouterApp } from "./router"
import '@mantine/core/styles.css';

const theme = createTheme({
    /** Put your mantine theme override here */
  });

const App = () => (
    <MantineProvider theme={theme}>
<div className=" bg-primary h-full text-white"><RouterApp/></div>
</MantineProvider>
)

    


export default App
