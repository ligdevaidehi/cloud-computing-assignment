import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write("HELLO WORLD <br>")
        self.response.write("VISHWAKARMA INSTITUTE OF TECHNOLOGY, PUNE<br> ")
        self.response.write("ARTIFICIAL INTELLIGENCE AND DATA SCIENCE\n ")
        
app=webapp2.WSGIApplication([('/',MainPage)],debug=True)