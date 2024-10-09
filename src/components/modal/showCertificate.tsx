import { useDisclosure } from '@mantine/hooks';
import { Modal} from '@mantine/core';
import { useEffect } from 'react';



export function ShowCerticate({src,deleteSrc}:{src?:string,deleteSrc?:any}) {
    const [opened, { open, close }] = useDisclosure(false);

    
function closeAll() {
    deleteSrc&&deleteSrc()
    close()
}
useEffect(() => {
    close()
    if (src) {
       open() 
    }
}, [src]);

    return (
        <>
            <Modal size={"xl"} opened={opened} onClose={closeAll}  >
            <div className="relative w-full overflow-hidden h-svh" >
            <iframe src={src}  className=' w-full h-full' >
    Your browser doesn't support iframes
</iframe>
    </div>
                
            </Modal>

        </>
    );
}