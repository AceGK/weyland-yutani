import getDocumentHeight from "../hooks/getDocumentHeight";

const DocumentHeight = () =>  {

  const height = getDocumentHeight();

  return (
      <>
      {height}
      </>
  )
}
export default DocumentHeight