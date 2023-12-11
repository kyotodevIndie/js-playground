export const Home = ({ handleChange, hasError }: any) => {
  return (
    <div className="bg-white w-full h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl font-bold">JSON Tree Viewer</h1>
      <p className="text-2xl">
        Simple JSON Viewer that runs completely on-client. No data exchange
      </p>
      <label
        htmlFor="jsonFileInput"
        className="bg-[linear-gradient(180deg,#E4E4E4_0%,#F7F7F7_100%)] px-3 py-1 border border-black rounded-[5px] opacity-70 text-black hover:opacity-100 cursor-pointer"
      >
        Load Json
      </label>
      <input
        type="file"
        className="hidden"
        id="jsonFileInput"
        accept="application/JSON"
        onChange={(e) => handleChange(e)}
      />

      {hasError && (
        <p className="text-primaryError">
          Invalid file. Please load a valid JSON file.
        </p>
      )}
    </div>
  )
}
