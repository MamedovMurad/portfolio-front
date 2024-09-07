
import { FileButton, Button, Group, Text } from '@mantine/core';

export function FileUploadButton(params:{files:any, setfiles:any, text:string}) {
  return (
    <>
      <Group justify="left">
        <FileButton onChange={params.setfiles} accept="image/png,image/jpeg">
          {(props) => <Button {...props} className=' bg-dark'>{params.text}</Button>}
        </FileButton>
      </Group>

      {params.files  && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
     
          <li >{params?.files?.name}</li>
        
      </ul>
    </>
  );
}