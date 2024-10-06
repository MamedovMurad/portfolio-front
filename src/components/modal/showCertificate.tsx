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
            <div className="relative w-full overflow-hidden" style={{ paddingTop: "80%" }}>
            <iframe src={src} className=' fixed top-0 left-0 bottom-0 right-0 w-full h-full border-0 overflow-hidden z-30' >
    Your browser doesn't support iframes
</iframe>
    </div>
                
            </Modal>

        </>
    );
}