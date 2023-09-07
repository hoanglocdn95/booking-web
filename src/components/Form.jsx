const Form = () => {
  return (
    <div className="form__container">
      <h1 className="form__container--title">Save time, save money!</h1>
      <span className="form__container--desc">
        Sign up and we'll send the best deals to you
      </span>
      <form>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Form;
