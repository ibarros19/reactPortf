export default function ContactSection () {
    return (
      <section className="section px-5 pb-5" id="contact">
      <div class="px-5">
        <form className="">
          <div className="">
            <h2 className="h5 fw-600  opacity-50 text-center">
              CONTACT ME !
            </h2>
            <p className="text-center mb-4 opacity-75 pb-5">Write a message to me and I'll answer as soon as possible.</p>
            <div className="m-auto" style={{maxWidth:500}}>
              <div className="mb-3">
                <div className=" relative ">
                  <input
                    required
                    type="text"
                    id="contact-form-name"
                    className="form-control border-1"
                    placeholder="Name *Required"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className=" relative ">
                  <input
                    type="email"
                    required
                    id="contact-form-email"
                    className="form-control border-1"
                    placeholder="E-mail *Required"
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  required
                  className="form-control border-1"
                  id="message"
                  placeholder="Type your message... *Required"
                  name="Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-end mt-4">
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 fw-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}