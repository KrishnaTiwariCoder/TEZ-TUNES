/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@temple-wallet/dapp@8.0.0/dist/index.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? r(exports, require("nanoid"), require("@taquito/taquito"))
    : "function" == typeof define && define.amd
    ? define(["exports", "nanoid", "@taquito/taquito"], r)
    : r(((e || self).dapp = {}), e.nanoid, e.taquito);
})(this, function (e, r, t) {
  var n, o, i;
  function s() {
    return (
      (s =
        Object.assign ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
      s.apply(this, arguments)
    );
  }
  function a(e, r) {
    (e.prototype = Object.create(r.prototype)),
      (e.prototype.constructor = e),
      p(e, r);
  }
  function p(e, r) {
    return (
      (p =
        Object.setPrototypeOf ||
        function (e, r) {
          return (e.__proto__ = r), e;
        }),
      p(e, r)
    );
  }
  function u(e, r) {
    if (null == e) return {};
    var t,
      n,
      o = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r.indexOf((t = i[n])) >= 0 || (o[t] = e[t]);
    return o;
  }
  (e.TempleDAppMessageType = void 0),
    ((n =
      e.TempleDAppMessageType ||
      (e.TempleDAppMessageType = {})).GetCurrentPermissionRequest =
      "GET_CURRENT_PERMISSION_REQUEST"),
    (n.GetCurrentPermissionResponse = "GET_CURRENT_PERMISSION_RESPONSE"),
    (n.PermissionRequest = "PERMISSION_REQUEST"),
    (n.PermissionResponse = "PERMISSION_RESPONSE"),
    (n.OperationRequest = "OPERATION_REQUEST"),
    (n.OperationResponse = "OPERATION_RESPONSE"),
    (n.SignRequest = "SIGN_REQUEST"),
    (n.SignResponse = "SIGN_RESPONSE"),
    (n.BroadcastRequest = "BROADCAST_REQUEST"),
    (n.BroadcastResponse = "BROADCAST_RESPONSE"),
    (e.TempleDAppErrorType = void 0),
    ((o = e.TempleDAppErrorType || (e.TempleDAppErrorType = {})).NotGranted =
      "NOT_GRANTED"),
    (o.NotFound = "NOT_FOUND"),
    (o.InvalidParams = "INVALID_PARAMS"),
    (o.TezosOperation = "TEZOS_OPERATION"),
    (e.TemplePageMessageType = void 0),
    ((i = e.TemplePageMessageType || (e.TemplePageMessageType = {})).Request =
      "TEMPLE_PAGE_REQUEST"),
    (i.Response = "TEMPLE_PAGE_RESPONSE"),
    (i.ErrorResponse = "TEMPLE_PAGE_ERROR_RESPONSE");
  var c = function (r) {
      try {
        return Promise.resolve(
          g({
            type: e.TempleDAppMessageType.BroadcastRequest,
            signedOpBytes: r,
          })
        ).then(function (r) {
          return (
            v(r.type === e.TempleDAppMessageType.BroadcastResponse), r.opHash
          );
        });
      } catch (e) {
        return Promise.reject(e);
      }
    },
    l = function (r, t) {
      try {
        return Promise.resolve(
          g({
            type: e.TempleDAppMessageType.SignRequest,
            sourcePkh: r,
            payload: t,
          })
        ).then(function (r) {
          return (
            v(r.type === e.TempleDAppMessageType.SignResponse), r.signature
          );
        });
      } catch (e) {
        return Promise.reject(e);
      }
    },
    m = function (r, t) {
      try {
        return Promise.resolve(
          g({
            type: e.TempleDAppMessageType.OperationRequest,
            sourcePkh: r,
            opParams: t,
          })
        ).then(function (r) {
          return (
            v(r.type === e.TempleDAppMessageType.OperationResponse), r.opHash
          );
        });
      } catch (e) {
        return Promise.reject(e);
      }
    },
    f = function (r, t, n) {
      try {
        return Promise.resolve(
          g({
            type: e.TempleDAppMessageType.PermissionRequest,
            network: r,
            appMeta: t,
            force: n,
          })
        ).then(function (r) {
          return (
            v(r.type === e.TempleDAppMessageType.PermissionResponse),
            { rpc: r.rpc, pkh: r.pkh, publicKey: r.publicKey }
          );
        });
      } catch (e) {
        return Promise.reject(e);
      }
    },
    P = function () {
      try {
        return Promise.resolve(
          g({ type: e.TempleDAppMessageType.GetCurrentPermissionRequest })
        ).then(function (r) {
          return (
            v(r.type === e.TempleDAppMessageType.GetCurrentPermissionResponse),
            r.permission
          );
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
  function T() {
    return new Promise(function (r) {
      var t = function (r) {
          var t, o;
          r.source === window &&
            (null === (t = r.data) || void 0 === t ? void 0 : t.type) ===
              e.TemplePageMessageType.Response &&
            "PONG" ===
              (null === (o = r.data) || void 0 === o ? void 0 : o.payload) &&
            n(!0);
        },
        n = function (e) {
          r(e), window.removeEventListener("message", t), clearTimeout(o);
        };
      d({ type: e.TemplePageMessageType.Request, payload: "PING" }),
        window.addEventListener("message", t);
      var o = setTimeout(function () {
        return n(!1);
      }, 500);
    });
  }
  function y(e) {
    var r,
      t = !1;
    return (
      (function n(o) {
        void 0 === o && (o = 0);
        try {
          var i = o < 5;
          return Promise.resolve(T()).then(function (s) {
            t !== s && (e(s), (t = s)),
              (r = setTimeout(n, s ? 1e4 : i ? 0 : 5e3, i ? o + 1 : o));
          });
        } catch (e) {
          return Promise.reject(e);
        }
      })(),
      function () {
        return clearTimeout(r);
      }
    );
  }
  function h(e) {
    var r,
      t = null;
    return (
      (function n() {
        try {
          var o = function () {
              r = setTimeout(n, 1e4);
            },
            i = (function (r, n) {
              try {
                var o = Promise.resolve(P()).then(function (r) {
                  var n, o;
                  (o = t),
                    (null === (n = r)
                      ? null === o
                      : n.pkh === (null == o ? void 0 : o.pkh) &&
                        n.rpc === (null == o ? void 0 : o.rpc)) ||
                      (e(r), (t = r));
                });
              } catch (e) {
                return;
              }
              return o && o.then ? o.then(void 0, function () {}) : o;
            })();
          return Promise.resolve(i && i.then ? i.then(o) : o());
        } catch (e) {
          return Promise.reject(e);
        }
      })(),
      function () {
        return clearTimeout(r);
      }
    );
  }
  function g(n) {
    return new Promise(function (o, i) {
      var s = r.nanoid();
      d({ type: e.TemplePageMessageType.Request, payload: n, reqId: s }),
        window.addEventListener("message", function r(n) {
          var a = n.data;
          switch (!0) {
            case n.source !== window || (null == a ? void 0 : a.reqId) !== s:
              return;
            case (null == a ? void 0 : a.type) ===
              e.TemplePageMessageType.Response:
              o(a.payload), window.removeEventListener("message", r);
              break;
            case (null == a ? void 0 : a.type) ===
              e.TemplePageMessageType.ErrorResponse:
              i(
                (function (r) {
                  switch (!0) {
                    case r === e.TempleDAppErrorType.NotGranted:
                      return new R();
                    case r === e.TempleDAppErrorType.NotFound:
                      return new O();
                    case r === e.TempleDAppErrorType.InvalidParams:
                      return new A();
                    case Array.isArray(r) &&
                      r[0] === e.TempleDAppErrorType.TezosOperation &&
                      Array.isArray(r[1]) &&
                      r[1].length > 0:
                      return new t.TezosOperationError(r[1]);
                    case "string" == typeof r && r.startsWith("__tezos__"):
                      return new Error(r.replace("__tezos__", ""));
                    default:
                      return new E();
                  }
                })(a.payload)
              ),
                window.removeEventListener("message", r);
          }
        });
    });
  }
  function v(e) {
    if (!e) throw new Error("Invalid response recieved");
  }
  function d(e) {
    window.postMessage(e, "*");
  }
  var E = function () {
      (this.name = "TempleWalletError"),
        (this.message =
          "An unknown error occured. Please try again or report it");
    },
    R = /*#__PURE__*/ (function (e) {
      function r() {
        for (var r, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        return (
          ((r = e.call.apply(e, [this].concat(n)) || this).name =
            "NotGrantedTempleWalletError"),
          (r.message = "Permission Not Granted"),
          r
        );
      }
      return a(r, e), r;
    })(E),
    O = /*#__PURE__*/ (function (e) {
      function r() {
        for (var r, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        return (
          ((r = e.call.apply(e, [this].concat(n)) || this).name =
            "NotFoundTempleWalletError"),
          (r.message = "Account Not Found. Try connect again"),
          r
        );
      }
      return a(r, e), r;
    })(E),
    A = /*#__PURE__*/ (function (e) {
      function r() {
        for (var r, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        return (
          ((r = e.call.apply(e, [this].concat(n)) || this).name =
            "InvalidParamsTempleWalletError"),
          (r.message = "Some of the parameters you provided are invalid"),
          r
        );
      }
      return a(r, e), r;
    })(E),
    S = ["fee", "gas_limit", "storage_limit"],
    _ = ["destination", "amount", "parameters"],
    w = /*#__PURE__*/ (function () {
      function e(e, r) {
        (this.appName = void 0),
          (this.permission = null),
          (this.appName = e),
          r && (this.permission = r);
      }
      var r,
        n = e.prototype;
      return (
        (n.toTezos = function () {
          D(this.permission);
          var e = new t.TezosToolkit(this.permission.rpc);
          return e.setProvider({ wallet: this }), e;
        }),
        (n.connect = function (e, r) {
          void 0 === r && (r = { forcePermission: !1 });
          try {
            var t = this;
            return Promise.resolve(
              f(e, { name: t.appName }, r.forcePermission)
            ).then(function (e) {
              t.permission = e;
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.reconnect = function (e) {
          return this.connect(e, { forcePermission: !0 });
        }),
        (n.getPKH = function () {
          try {
            return D(this.permission), Promise.resolve(this.permission.pkh);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.mapTransferParamsToWalletParams = function (e) {
          try {
            var r = this;
            return Promise.resolve(e()).then(function (e) {
              var n = r.removeDefaultParams;
              return Promise.resolve(
                t.createTransferOperation(r.formatParameters(e))
              ).then(function (t) {
                return n.call(r, e, t);
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.mapOriginateParamsToWalletParams = function (e) {
          try {
            var r = this;
            return Promise.resolve(e()).then(function (e) {
              var n = r.removeDefaultParams;
              return Promise.resolve(
                t.createOriginationOperation(r.formatParameters(e))
              ).then(function (t) {
                return n.call(r, e, t);
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.mapDelegateParamsToWalletParams = function (e) {
          try {
            var r = this;
            return Promise.resolve(e()).then(function (e) {
              var n = r.removeDefaultParams;
              return Promise.resolve(
                t.createSetDelegateOperation(r.formatParameters(e))
              ).then(function (t) {
                return n.call(r, e, t);
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.mapIncreasePaidStorageWalletParams = function (e) {
          try {
            var r = this;
            return Promise.resolve(e()).then(function (e) {
              var n = r.removeDefaultParams;
              return Promise.resolve(
                t.createSetDelegateOperation(r.formatParameters(e))
              ).then(function (t) {
                return n.call(r, e, t);
              });
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.sendOperations = function (e) {
          try {
            return (
              D(this.permission),
              Promise.resolve(m(this.permission.pkh, e.map(M)))
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.sign = function (e) {
          try {
            return (
              D(this.permission), Promise.resolve(l(this.permission.pkh, e))
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.broadcast = function (e) {
          try {
            return D(this.permission), Promise.resolve(c(e));
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (n.formatParameters = function (e) {
          return (
            e.fee && (e.fee = e.fee.toString()),
            e.storageLimit && (e.storageLimit = e.storageLimit.toString()),
            e.gasLimit && (e.gasLimit = e.gasLimit.toString()),
            e
          );
        }),
        (n.removeDefaultParams = function (e, r) {
          return (
            e.fee || delete r.fee,
            e.storageLimit || delete r.storage_limit,
            e.gasLimit || delete r.gas_limit,
            r
          );
        }),
        (r = [
          {
            key: "connected",
            get: function () {
              return Boolean(this.permission);
            },
          },
        ]) &&
          (function (e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(e.prototype, r),
        e
      );
    })();
  (w.isAvailable = T),
    (w.onAvailabilityChange = y),
    (w.getCurrentPermission = P),
    (w.onPermissionChange = h);
  var N = /*#__PURE__*/ (function (e) {
    function r() {
      for (var r, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return (
        ((r = e.call.apply(e, [this].concat(n)) || this).name =
          "TempleWalletNotConnected"),
        (r.message =
          "You need to connect TempleWallet by calling templeWallet.connect() first"),
        r
      );
    }
    return a(r, e), r;
  })(E);
  function D(e) {
    if (!e) throw new N();
  }
  function M(e) {
    var r = e.fee,
      t = e.gas_limit,
      n = e.storage_limit,
      o = u(e, S);
    switch (e.kind) {
      case "origination":
        return s({}, o, { mutez: !0, fee: r, gasLimit: t, storageLimit: n });
      case "transaction":
        var i = o.destination,
          a = o.amount,
          p = o.parameters;
        return s({}, u(o, _), {
          to: i,
          amount: +a,
          mutez: !0,
          parameter: p,
          fee: r,
          gasLimit: t,
          storageLimit: n,
        });
      default:
        return s({}, o, { fee: r, gasLimit: t, storageLimit: n });
    }
  }
  (e.InvalidParamsTempleWalletError = A),
    (e.NotConnectedTempleWalletError = N),
    (e.NotFoundTempleWalletError = O),
    (e.NotGrantedTempleWalletError = R),
    (e.TempleWallet = w),
    (e.TempleWalletError = E),
    (e.getCurrentPermission = P),
    (e.isAvailable = T),
    (e.onAvailabilityChange = y),
    (e.onPermissionChange = h),
    (e.requestBroadcast = c),
    (e.requestOperation = m),
    (e.requestPermission = f),
    (e.requestSign = l);
});
//# sourceMappingURL=index.umd.js.map
