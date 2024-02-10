

const Intro = () => {
  return (
    <div className="container-70 mt-5 ">
      <div className="d-flex gap">
        <div className="flex-1">
          <h2 className="p-3">Adventure in Creative age</h2>
          <p className="p-1">
            Hello Lama dev master, how do you decide in each project how to handle the ui? i mean, since there are too many frameworks, or components library like material design or semantic ui, ive always struggle deciding what to use, i just cant find wich one use, maybe for just static websites use css styled components or tailwind and for applications, like the dashboard you made use components libraries, do you have any advice?
          </p>
          <div className="d-flex pt-5">
            <div>
              <button className="btn">START A PROJECT</button>
            </div>
            <div>
              <a className="text-danger">Call Us (+91) 877-076-8820</a>
              <p>For any Question Or Concern</p>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <img className="width-100" src='https://www.shutterstock.com/image-photo/young-indian-woman-isolated-cutout-260nw-2217884945.jpg' alt="name" />
        </div>
      </div>
    </div>


  )
}

export default Intro;



