import { useState } from 'react'
import { Home } from './Home'
import { JsonViewer } from './JsonViewer'

function App() {
  const [hasError, setError] = useState(false)
  const [jsonData, setJsonData] = useState({})
  const [fileName, setFileName] = useState('')

  const handleChange = async (e: any) => {
    setError(false)
    const file = e.target.files[0]
    console.log(file.name.split('.').pop().toLowerCase())
    if (file.name.split('.').pop().toLowerCase() !== 'json') {
      setError(true)
      return
    }
    const reader = new FileReader()
    reader.onload = onReaderLoad
    reader.readAsText(file)
  }

  const onReaderLoad = async (e: any) => {
    // console.log(e.target.result)
    const obj = await JSON.parse(e.target.result)
    setFileName('')
    setJsonData(obj)
  }
  return (
    <>
      {/* {jsonData.length === 0 ? ( */}
      {Object.keys(jsonData).length === 0 ? (
        <Home handleChange={handleChange} hasError={hasError} />
      ) : (
        <JsonViewer
          jsonData={jsonData}
          setJsonData={setJsonData}
          fileName={fileName}
        />
      )}
    </>
  )
}

export default App
