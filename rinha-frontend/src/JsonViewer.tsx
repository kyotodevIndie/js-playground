export const JsonViewer = ({ jsonData, setJsonData, filename }: any) => {
  return (
    <>
      <p onClick={() => setJsonData({})}>X</p>
      <h1 className="text-black text-[32px] font-bold">aq {filename}</h1>
      {console.log(filename)}
      {/* <p>{JSON.stringify(jsonData)}</p> */}
    </>
  )
}
