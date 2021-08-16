export default function Contact() {
    return(
        <section id="contact" class="site-section section-form text-center">
            <div class="container">

                <h3>Contact</h3>
                <img src="assets/img/lines.svg" class="img-lines" alt="lines"/>
                <form>
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="text" name="name" class="form-control mt-x-0" placeholder="Name" required/>
                        </div>
                        <div class="col-sm-6">
                            <input type="email" name="email" class="form-control" placeholder="Email" required/>
                        </div>
                        <div class="col-sm-12">
                            <textarea name="message" id="mesaage" class="form-control" placeholder="Message" required></textarea>
                        </div>
                    </div>
                    <button href="#" class="btn btn-border" type="submit">Hire Me <span class="glyphicon glyphicon-send"></span></button>
                </form>
            </div>
        </section>
    )
}