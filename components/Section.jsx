export default function Section(props) {
    return (
      <>
          <section>
            <p><a href="/">Home Page</a></p>
            <button onClick={()=> alert("Hello Word!")}>
                Click Me!
            </button>
            <img src={props.reactLogoProps} alt={props.reactLogoAltProps} />
          </section>
      </>
    )
  }