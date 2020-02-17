(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    ,
    ,
    function(e, t, a) {
      e.exports = a.p + "static/media/Navi2.eb94472d.png";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/burrito.68c141b5.png";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/gold-star.d864868f.png";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/film-reel.7b573a37.png";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/rainbow-xylophone.05db804d.png";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/doggo.b478812c.svg";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/PoppiesSimpleWhite.48d85dab.svg";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/PoppiesSimpleBlack.80208ec9.svg";
    },
    function(e, t, a) {
      e.exports = a.p + "static/media/DesignLogo.47bc14e5.svg";
    },
    function(e, t, a) {
      e.exports = a(41);
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {},
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {},
    function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        r = a(6),
        l = a.n(r),
        i = (a(27), a(1)),
        o = a(2),
        s = a(4),
        m = a(3),
        u = a(5),
        h = (a(28), a(29), a(7)),
        d = (a(9),
        function(e) {
          return function(t) {
            var a,
              r,
              l = t.displayName || t.name || "Component";
            return (
              (r = a = (function(a) {
                function n() {
                  var t, a;
                  Object(i.a)(this, n);
                  for (
                    var c = arguments.length, r = new Array(c), l = 0;
                    l < c;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    ((a = Object(s.a)(
                      this,
                      (t = Object(m.a)(n)).call.apply(t, [this].concat(r))
                    )).state = { isIntersecting: !1 }),
                    (a.handleChange = function(t) {
                      var n = t.isIntersecting,
                        c = t.intersectionRatio;
                      a.setState({ isIntersecting: n && c >= e });
                    }),
                    a
                  );
                }
                return (
                  Object(u.a)(n, a),
                  Object(o.a)(n, [
                    {
                      key: "render",
                      value: function() {
                        return c.a.createElement(
                          h.a,
                          { onChange: this.handleChange, threshold: e },
                          c.a.createElement(
                            t,
                            Object.assign({}, this.props, {
                              isVisible: this.state.isIntersecting
                            })
                          )
                        );
                      }
                    }
                  ]),
                  n
                );
              })(n.Component)),
              (a.displayName = "withIntersectionObserver(".concat(l, ")")),
              r
            );
          };
        }),
        p = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = "".concat(
                    this.props.isVisible ? "visible-left" : "hidden-left"
                  );
                  return c.a.createElement(
                    "div",
                    { className: "about-info ".concat(e) },
                    c.a.createElement(
                      "h2",
                      { id: "about-block1" },
                      "01 // Who is this ",
                      c.a.createElement("span", null, "wunderkind?")
                    ),
                    c.a.createElement(
                      "h2",
                      { id: "about-block2" },
                      "She\u2019s a child of the Portland streets..."
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        E = d(0.15)(p),
        b = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = "".concat(
                    this.props.isVisible ? "visible-left" : "hidden-left"
                  );
                  return c.a.createElement(
                    "div",
                    { className: "about-summary ".concat(e) },
                    c.a.createElement(
                      "p",
                      null,
                      "An enthusiastic professional who strives to make thrilling, interactive, UI experiences."
                    ),
                    c.a.createElement(
                      "p",
                      null,
                      "She's an unapologetic artist, and Front-end Developer with a passion for inclusive design."
                    ),
                    c.a.createElement(
                      "p",
                      null,
                      "When away from the computer, or a sketch book, she can often be found practising with her longsword and taking her dog (worlds goodest boy) out for long hikes."
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        g = d(0.15)(b),
        v = a(12),
        f = a.n(v),
        j = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, c = new Array(n), r = 0; r < n; r++)
              c[r] = arguments[r];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(c))
              )).state = { enterRight: "hidden-right" }),
              (a.handleChange = function(e) {
                a.setState({
                  enterRight: e.isIntersecting
                    ? "visible-right"
                    : "hidden-right"
                });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    h.a,
                    { onChange: this.handleChange, threshold: 0.25 },
                    c.a.createElement(
                      "div",
                      { id: "about-container" },
                      c.a.createElement(E, null),
                      c.a.createElement(g, null),
                      c.a.createElement("div", { id: "white" }),
                      c.a.createElement("img", {
                        id: "fairy",
                        className: "".concat(this.state.enterRight),
                        src: f.a,
                        alt: "Tasha Zuniga"
                      }),
                      c.a.createElement(
                        "div",
                        { id: "profile" },
                        c.a.createElement("h3", null, "Profile")
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        k = (a(35), a(13)),
        O = a.n(k),
        y = a(14),
        N = a.n(y),
        w = a(15),
        C = a.n(w),
        x = a(16),
        R = a.n(x),
        D = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { id: "projects-container" },
                    c.a.createElement("h1", null, "02 // Some projects"),
                    c.a.createElement(
                      "a",
                      {
                        id: "project-link1",
                        href: "https://mobile-eats.herokuapp.com/"
                      },
                      c.a.createElement("div", { className: "project-title" }),
                      c.a.createElement("h3", null, "Mobile Eats"),
                      c.a.createElement(
                        "div",
                        { className: "project-block" },
                        c.a.createElement("h4", null, "Food Truck Tracker"),
                        c.a.createElement("img", {
                          src: O.a,
                          alt: "food cart burrito"
                        }),
                        c.a.createElement("h4", null, "React")
                      )
                    ),
                    c.a.createElement(
                      "a",
                      {
                        id: "project-link2",
                        href:
                          "https://play.google.com/store/apps/details?id=com.alchemycodelab.mercury.app"
                      },
                      c.a.createElement("div", { className: "project-title" }),
                      c.a.createElement("h3", null, "Ugyde Review App"),
                      c.a.createElement(
                        "div",
                        { className: "project-block" },
                        c.a.createElement("h4", null, "Video Business Reviews"),
                        c.a.createElement("img", {
                          src: N.a,
                          alt: "gold star"
                        }),
                        c.a.createElement("h4", null, "React + Firebase")
                      )
                    ),
                    c.a.createElement(
                      "a",
                      {
                        id: "project-link3",
                        href: "https://tashazun.github.io/Cute-Xylophone/"
                      },
                      c.a.createElement("div", { className: "project-title" }),
                      c.a.createElement("h3", null, "Zen Xylophone"),
                      c.a.createElement(
                        "div",
                        { className: "project-block" },
                        c.a.createElement(
                          "h4",
                          null,
                          "Cute, Colorful Music Maker"
                        ),
                        c.a.createElement("img", {
                          src: R.a,
                          alt: "rainbow xylophone"
                        }),
                        c.a.createElement("h4", null, "Pure Javascript")
                      )
                    ),
                    c.a.createElement(
                      "a",
                      {
                        id: "project-link4",
                        href: "https://deepfocus.herokuapp.com"
                      },
                      c.a.createElement("div", { className: "project-title" }),
                      c.a.createElement("h3", null, "Deep Focus"),
                      c.a.createElement(
                        "div",
                        { className: "project-block" },
                        c.a.createElement("h4", null, "Technical Film Reviews"),
                        c.a.createElement("img", {
                          src: C.a,
                          alt: "film reel"
                        }),
                        c.a.createElement(
                          "h4",
                          null,
                          "React/Redux + Node/Express"
                        )
                      )
                    ),
                    c.a.createElement(
                      "div",
                      { id: "works" },
                      c.a.createElement("h3", null, "Works")
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        I = a(17),
        V = a.n(I),
        S = (a(36),
        a(37),
        (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = "".concat(this.props.isVisible ? "slide-in" : ""),
                    t = "".concat(
                      this.props.isVisible ? "visible" : "transparent"
                    );
                  return c.a.createElement(
                    "div",
                    { className: "design-container ".concat(t) },
                    c.a.createElement(
                      "div",
                      { id: "design-title" },
                      c.a.createElement("h3", null, "Design"),
                      c.a.createElement("h3", null, "30%")
                    ),
                    c.a.createElement(
                      "div",
                      { id: "design-graph" },
                      c.a.createElement(
                        "div",
                        { className: "design-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar1 ".concat(e) },
                          "25%"
                        ),
                        c.a.createElement("h4", null, "Photoshop")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "design-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar2 ".concat(e) },
                          "25%"
                        ),
                        c.a.createElement("h4", null, "Illustrator/Inkscape")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "design-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar3 ".concat(e) },
                          "45%"
                        ),
                        c.a.createElement("h4", null, "Drawing")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "design-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar4 ".concat(e) },
                          "5%"
                        ),
                        c.a.createElement("h4", null, "InDesign")
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component)),
        M = d(0.7)(S),
        A = (a(38),
        (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = "".concat(this.props.isVisible ? "slide-in" : ""),
                    t = "".concat(
                      this.props.isVisible ? "visible" : "transparent"
                    );
                  return c.a.createElement(
                    "div",
                    { className: "coding-container ".concat(t) },
                    c.a.createElement(
                      "div",
                      { id: "coding-title" },
                      c.a.createElement("h3", null, "Coding"),
                      c.a.createElement("h3", null, "50%")
                    ),
                    c.a.createElement(
                      "div",
                      { id: "coding-graph" },
                      c.a.createElement(
                        "div",
                        { className: "coding-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar1 ".concat(e) },
                          "40%"
                        ),
                        c.a.createElement("h4", null, "Javascript")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "coding-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar2 ".concat(e) },
                          "35%"
                        ),
                        c.a.createElement("h4", null, "React/Redux")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "coding-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar3 ".concat(e) },
                          "10%"
                        ),
                        c.a.createElement("h4", null, "NodeJs/Express")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "coding-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar4 ".concat(e) },
                          "15%"
                        ),
                        c.a.createElement("h4", null, "MongoDB/Mongoose")
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component)),
        B = d(0.7)(A),
        P = (a(39),
        (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = "".concat(this.props.isVisible ? "slide-in" : ""),
                    t = "".concat(
                      this.props.isVisible ? "visible" : "transparent"
                    );
                  return c.a.createElement(
                    "div",
                    { className: "misc-container ".concat(t) },
                    c.a.createElement(
                      "div",
                      { id: "misc-title" },
                      c.a.createElement("h3", null, "Other Stuff"),
                      c.a.createElement("h3", null, "20%")
                    ),
                    c.a.createElement(
                      "div",
                      { id: "misc-graph" },
                      c.a.createElement(
                        "div",
                        { className: "misc-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar1 ".concat(e) },
                          "35%"
                        ),
                        c.a.createElement("h4", null, "Git")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "misc-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar2 ".concat(e) },
                          "30%"
                        ),
                        c.a.createElement("h4", null, "NPM/Yarn")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "misc-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar3 ".concat(e) },
                          "15%"
                        ),
                        c.a.createElement("h4", null, "Docker")
                      ),
                      c.a.createElement(
                        "div",
                        { className: "misc-block" },
                        c.a.createElement(
                          "h4",
                          { className: "graph-bar4 ".concat(e) },
                          "20%"
                        ),
                        c.a.createElement("h4", null, "Heroku")
                      )
                    ),
                    c.a.createElement(
                      "h3",
                      { id: "good-bye" },
                      "Anyhing else? Just ask!"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component)),
        T = d(0.7)(P),
        W = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { id: "skills-container" },
                    c.a.createElement("h1", null, "03 \\\\ What can she do?"),
                    c.a.createElement(
                      "div",
                      { id: "skills-summary" },
                      c.a.createElement(M, null),
                      c.a.createElement(B, null),
                      c.a.createElement(T, null)
                    ),
                    c.a.createElement(
                      "div",
                      { id: "skills-img" },
                      c.a.createElement("img", { src: V.a, alt: "cute doggo" })
                    ),
                    c.a.createElement(
                      "div",
                      { id: "skills" },
                      c.a.createElement(
                        "div",
                        { id: "arrow-container" },
                        c.a.createElement("div", { id: "arrow-tail" }),
                        c.a.createElement("div", { id: "arrow-up" })
                      ),
                      c.a.createElement("h3", null, "Skills")
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        J = a(10),
        F = a.n(J),
        z = (a(40), a(18)),
        Z = a.n(z),
        G = a(19),
        U = a.n(G),
        X = a(20),
        H = a.n(X),
        L = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  new F.a("white", {
                    type: "oneByOne",
                    start: "autostart",
                    duration: 3e4,
                    file: Z.a
                  }),
                    new F.a("black", {
                      type: "oneByOne",
                      start: "autostart",
                      duration: 3e4,
                      file: U.a
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { className: "landing-page" },
                    c.a.createElement(
                      "div",
                      { id: "top-layer" },
                      c.a.createElement("img", {
                        id: "logo",
                        src: H.a,
                        alt: "Mayan glyph that spells Zuniga"
                      }),
                      c.a.createElement("h2", null, "Tasha Zuniga"),
                      c.a.createElement("div", { id: "black" }),
                      c.a.createElement("div", { id: "border" })
                    ),
                    c.a.createElement(
                      "div",
                      { id: "bottom-layer" },
                      c.a.createElement(
                        "div",
                        { id: "intro" },
                        c.a.createElement("h3", null, "Designer / Developer"),
                        c.a.createElement(
                          "div",
                          { id: "arrow-container" },
                          c.a.createElement("div", { id: "arrow-tail" }),
                          c.a.createElement("div", { id: "arrow-down" })
                        )
                      ),
                      c.a.createElement("div", { id: "white" })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Y = a(8),
        $ = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { className: "App-container" },
                    c.a.createElement(L, null),
                    c.a.createElement(j, null),
                    c.a.createElement(D, null),
                    c.a.createElement(W, null),
                    c.a.createElement(
                      "footer",
                      { className: "App-footer" },
                      c.a.createElement("p", null, "Tashazun(at)Gmail.com"),
                      c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(
                          "a",
                          { id: "github", href: "https://github.com/Tashazun" },
                          c.a.createElement(Y.a, null)
                        ),
                        c.a.createElement(
                          "a",
                          {
                            id: "linkedin",
                            href: "https://linkedin.com/in/tashazuniga/"
                          },
                          c.a.createElement(Y.b, { id: "linkedin" })
                        ),
                        c.a.createElement(
                          "a",
                          {
                            id: "twitter",
                            href: "https://twitter.com/artofobscura"
                          },
                          c.a.createElement(Y.c, null)
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(c.a.createElement($, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[21, 1, 2]]
]);
//# sourceMappingURL=main.13b59008.chunk.js.map
