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
            <Modal size={'xl'} opened={opened} onClose={closeAll} title="Certificates" >
            <div className="relative h-0 pb-[56.25%] overflow-hidden">
      <iframe
        src={src}
        title="PDF Viewer"
        className="absolute top-0 left-0 w-full h-full border-none block md:min-h-[500px] sm:min-h-[300px]"
      />
    </div>
                
            </Modal>

        </>
    );
}