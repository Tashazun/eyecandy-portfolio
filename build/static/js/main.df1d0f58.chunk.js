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
      e.exports = a.p + "static/media/doggo.ed9f60dc.svg";
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
    function(e, t, a) {},
    function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        c = a.n(n),
        l = a(6),
        r = a.n(l),
        i = (a(26), a(1)),
        o = a(2),
        s = a(4),
        m = a(3),
        d = a(5),
        u = (a(27), a(28), a(7)),
        h = (a(34), a(11)),
        p = a.n(h),
        E = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, c = new Array(n), l = 0; l < n; l++)
              c[l] = arguments[l];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(c))
              )).state = {
                enterLeft: "hidden-left",
                enterRight: "hidden-right"
              }),
              (a.handleChange = function(e) {
                a.setState({
                  enterLeft: e.isIntersecting ? "visible-left" : "hidden-left",
                  enterRight: e.isIntersecting
                    ? "visible-right"
                    : "hidden-right"
                });
              }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    u.a,
                    { onChange: this.handleChange, threshold: 0.25 },
                    c.a.createElement(
                      "div",
                      { id: "about-container" },
                      c.a.createElement(
                        "div",
                        {
                          className: "about-info ".concat(this.state.enterLeft)
                        },
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
                      ),
                      c.a.createElement(
                        "div",
                        { id: "about-summary" },
                        c.a.createElement(
                          "p",
                          null,
                          "An enthusiastic professional who strives to make thrilling, interactive, front-end experiences."
                        ),
                        c.a.createElement(
                          "p",
                          null,
                          "She&aposs an unapologetic artist and full-stack Javascript developer who uses her knowledge of front and back-end to make some really cool stuff."
                        ),
                        c.a.createElement(
                          "p",
                          null,
                          "When away from the computer, or a sketch book, she can often be found practising with her longsword and taking her dog( worlds goodest boy) out for long hikes."
                        )
                      ),
                      c.a.createElement(
                        "div",
                        { id: "profile" },
                        c.a.createElement("h3", null, "Profile")
                      ),
                      c.a.createElement("div", { id: "white" }),
                      c.a.createElement("img", {
                        className: "".concat(this.state.enterRight),
                        src: p.a,
                        alt: "Tasha Zuniga"
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        b = (a(35), a(12)),
        g = a.n(b),
        v = a(13),
        f = a.n(v),
        k = a(14),
        j = a.n(k),
        O = a(15),
        y = a.n(O),
        N = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
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
                          src: g.a,
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
                          src: f.a,
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
                          src: y.a,
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
                          src: j.a,
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
        w = a(16),
        C = a.n(w),
        x = (a(36),
        function(e) {
          return function(t) {
            var a,
              l,
              r = t.displayName || t.name || "Component";
            return (
              (l = a = (function(a) {
                function n() {
                  var t, a;
                  Object(i.a)(this, n);
                  for (
                    var c = arguments.length, l = new Array(c), r = 0;
                    r < c;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    ((a = Object(s.a)(
                      this,
                      (t = Object(m.a)(n)).call.apply(t, [this].concat(l))
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
                  Object(d.a)(n, a),
                  Object(o.a)(n, [
                    {
                      key: "render",
                      value: function() {
                        return c.a.createElement(
                          u.a,
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
              (a.displayName = "withIntersectionObserver(".concat(r, ")")),
              l
            );
          };
        }),
        R = (a(37),
        (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
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
        I = x(0.7)(R),
        D = (a(38),
        (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
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
        S = x(0.7)(D),
        M = (a(39),
        (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
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
        V = x(0.7)(M),
        A = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { id: "skills-container" },
                    c.a.createElement(
                      "div",
                      { id: "skills-img" },
                      c.a.createElement("img", { src: C.a, alt: "cute doggo" })
                    ),
                    c.a.createElement("h1", null, "03 \\\\ What can she do?"),
                    c.a.createElement(
                      "div",
                      { id: "skills-summary" },
                      c.a.createElement(I, null),
                      c.a.createElement(S, null),
                      c.a.createElement(V, null)
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
        B = a(9),
        J = a.n(B),
        P = (a(40), a(17)),
        W = a.n(P),
        T = a(18),
        F = a.n(T),
        L = a(19),
        Z = a.n(L),
        z = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  new J.a("white", {
                    type: "oneByOne",
                    start: "autostart",
                    duration: 45e3,
                    file: W.a
                  }),
                    new J.a("black", {
                      type: "oneByOne",
                      start: "autostart",
                      duration: 45e3,
                      file: F.a
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
                        src: Z.a,
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
                        c.a.createElement(
                          "h3",
                          null,
                          "Illustrator / Developer"
                        ),
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
        G = a(8),
        X = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function() {
                  return c.a.createElement(
                    "div",
                    { className: "App-container" },
                    c.a.createElement(z, null),
                    c.a.createElement(E, null),
                    c.a.createElement(N, null),
                    c.a.createElement(A, null),
                    c.a.createElement(
                      "footer",
                      { className: "App-footer" },
                      c.a.createElement("p", null, "Tashazun(at)Gmail.com"),
                      c.a.createElement(
                        "div",
                        null,
                        c.a.createElement(G.a, null),
                        c.a.createElement(G.b, null),
                        c.a.createElement(G.c, null)
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
      r.a.render(c.a.createElement(X, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[20, 1, 2]]
]);
//# sourceMappingURL=main.df1d0f58.chunk.js.map
