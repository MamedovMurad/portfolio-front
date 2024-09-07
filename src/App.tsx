import { createTheme, MantineProvider } from "@mantine/core"
import { RouterApp } from "./router"
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { Notifications } from '@mantine/notifications';

const theme = createTheme({
    /** Put your mantine theme override here */
  });

const App = () => (
    <MantineProvider theme={theme}>
        <Notifications />
<div className=" bg-primary md:h-full text-white"><RouterApp/></div>
</MantineProvider>
)

    


export default App
