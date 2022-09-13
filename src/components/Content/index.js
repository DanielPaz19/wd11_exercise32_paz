import "./style.css";

function Content({ src, orderReverse, paragraph, title, author, id }) {
  return (
    <div
      id={id}
      className={`container-fluid py-5   ${
        orderReverse ? "bg-primary" : "bg-light"
      }`}
    >
      <div className="container">
        <div className=" row">
          <div
            className={`col-md-5 col-12 text-center ${
              orderReverse ? "order-md-2" : ""
            }`}
          >
            <img src={src} alt="" className="content-img img-thumbnail" />
          </div>
          <div
            className={`col-md-7 col-12 pt-4  ${
              orderReverse
                ? "order-md-1 text-md-end text-center"
                : "text-md-start text-center text-primary"
            }`}
          >
            <h1 className={`fw-bolder ${orderReverse ? "text-secondary" : ""}`}>
              {title}
            </h1>
            <h5 className={`${orderReverse ? "text-light" : ""}`}>{author}</h5>

            <p
              className={`pt-3  ${
                orderReverse ? "text-light" : "text-primary"
              }`}
            >
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Content.defaultProps = {
  orderReverse: false,
};

export default Content;
