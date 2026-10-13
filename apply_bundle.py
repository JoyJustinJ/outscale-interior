import re
import sys

# Define the modernized navbar components
new_nav_code = """var gh = [{
    label: `Residential`,
    to: `/residential`,
    mega: `residential`
}, {
    label: `Commercial`,
    to: `/commercial`,
    mega: `commercial`
}, {
    label: `Services`,
    to: `/services`,
    mega: `services`
}, {
    label: `Projects`,
    to: `/projects`
}, {
    label: `3D & Tours`,
    to: `/3d-designs`,
    mega: `virtual`
}, {
    label: `About`,
    to: `/about`
}, {
    label: `More`,
    to: `/service-areas`,
    mega: `more`
}];

var mobileNavLinks = [{
    label: `Home`,
    to: `/`
}, {
    label: `Residential`,
    to: `/residential`
}, {
    label: `Commercial`,
    to: `/commercial`
}, {
    label: `Services`,
    to: `/services`
}, {
    label: `Projects`,
    to: `/projects`
}, {
    label: `3D Designs`,
    to: `/3d-designs`
}, {
    label: `360° Tours`,
    to: `/360-tours`
}, {
    label: `About Studio`,
    to: `/about`
}, {
    label: `Service Areas`,
    to: `/service-areas`
}, {
    label: `Journal & Blog`,
    to: `/blog`
}, {
    label: `Downloads`,
    to: `/downloads`
}, {
    label: `Contact`,
    to: `/contact`
}];

function _h({
    type: e,
    onClose: t
}) {
    let n = t || (() => {});
    return e === `residential` ? (0, j.jsxs)(`div`, {
        className: `space-y-6`,
        children: [(0, j.jsx)(`div`, {
            className: `grid grid-cols-4 gap-6`,
            children: lh.map(e => (0, j.jsxs)(V, {
                to: `/residential/${e.slug}`,
                onClick: n,
                className: `group block p-4 bg-sand/10 hover:bg-sand/30 border border-sand/40 transition-all duration-300`,
                children: [(0, j.jsx)(`div`, {
                    className: `font-heading text-xl text-charcoal group-hover:text-brass transition-colors`,
                    children: e.label
                }), (0, j.jsx)(`div`, {
                    className: `text-xs text-charcoal/60 mt-1.5 leading-relaxed`,
                    children: e.desc
                }), (0, j.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 text-[0.7rem] uppercase tracking-wider font-bold text-brass mt-3`,
                    children: [`Explore`, (0, j.jsx)(an, { size: 12 })]
                })]
            }, e.slug))
        }), (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between pt-4 border-t border-sand/40 text-xs`,
            children: [(0, j.jsx)(`span`, {
                className: `text-charcoal/60`,
                children: `Tailored residential interiors for villas, apartments & independent homes.`
            }), (0, j.jsxs)(V, {
                to: `/residential`,
                onClick: n,
                className: `font-bold uppercase tracking-wider text-charcoal hover:text-brass flex items-center gap-1.5 transition-colors`,
                children: [`View Residential Overview`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `commercial` ? (0, j.jsxs)(`div`, {
        className: `space-y-6`,
        children: [(0, j.jsx)(`div`, {
            className: `grid grid-cols-4 gap-x-6 gap-y-3.5`,
            children: uh.map(e => (0, j.jsxs)(V, {
                to: `/commercial/${e.slug}`,
                onClick: n,
                className: `group flex items-center justify-between py-1.5 px-2 hover:bg-sand/20 transition-colors text-charcoal/80 hover:text-brass font-body text-sm`,
                children: [(0, j.jsx)(`span`, { children: e.label }), (0, j.jsx)(an, {
                    size: 12,
                    className: `opacity-0 group-hover:opacity-100 transition-opacity text-brass`
                })]
            }, e.slug))
        }), (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between pt-4 border-t border-sand/40 text-xs`,
            children: [(0, j.jsx)(`span`, {
                className: `text-charcoal/60`,
                children: `Specialized commercial spaces engineered for customer experience and operational flow.`
            }), (0, j.jsxs)(V, {
                to: `/commercial`,
                onClick: n,
                className: `font-bold uppercase tracking-wider text-charcoal hover:text-brass flex items-center gap-1.5 transition-colors`,
                children: [`View All Commercial Types`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `services` ? (0, j.jsxs)(`div`, {
        className: `space-y-6`,
        children: [(0, j.jsx)(`div`, {
            className: `grid grid-cols-3 gap-x-8 gap-y-3.5`,
            children: dh.map(e => (0, j.jsxs)(V, {
                to: `/services/${e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}`,
                onClick: n,
                className: `group flex items-center justify-between py-2 px-3 bg-sand/10 hover:bg-sand/30 border border-sand/30 transition-all font-body text-sm text-charcoal/80 hover:text-brass`,
                children: [(0, j.jsx)(`span`, { children: e }), (0, j.jsx)(an, {
                    size: 13,
                    className: `opacity-0 group-hover:opacity-100 transition-opacity text-brass`
                })]
            }, e))
        }), (0, j.jsxs)(`div`, {
            className: `flex items-center justify-between pt-4 border-t border-sand/40 text-xs`,
            children: [(0, j.jsx)(`span`, {
                className: `text-charcoal/60`,
                children: `Full end-to-end design, modular manufacturing, and precision on-site execution.`
            }), (0, j.jsxs)(V, {
                to: `/services`,
                onClick: n,
                className: `font-bold uppercase tracking-wider text-charcoal hover:text-brass flex items-center gap-1.5 transition-colors`,
                children: [`View All Services`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `virtual` ? (0, j.jsx)(`div`, {
        className: `grid grid-cols-2 gap-8`,
        children: [(0, j.jsxs)(V, {
            to: `/3d-designs`,
            onClick: n,
            className: `group block p-6 bg-sand/15 hover:bg-sand/30 border border-sand/40 transition-all`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass mb-2`,
                children: `Visualization`
            }), (0, j.jsx)(`div`, {
                className: `font-heading text-2xl text-charcoal group-hover:text-brass transition-colors mb-2`,
                children: `3D Photorealistic Designs`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed mb-4`,
                children: `High-fidelity 3D renders that let you visualize lighting, material palettes, and textures before execution.`
            }), (0, j.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brass`,
                children: [`Browse 3D Gallery`, (0, j.jsx)(an, { size: 13 })]
            })]
        }), (0, j.jsxs)(V, {
            to: `/360-tours`,
            onClick: n,
            className: `group block p-6 bg-sand/15 hover:bg-sand/30 border border-sand/40 transition-all`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass mb-2`,
                children: `Virtual Reality`
            }), (0, j.jsx)(`div`, {
                className: `font-heading text-2xl text-charcoal group-hover:text-brass transition-colors mb-2`,
                children: `360° Interactive Virtual Tours`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed mb-4`,
                children: `Step inside completed residences and cafes in full 360-degree panoramic virtual walkthroughs.`
            }), (0, j.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brass`,
                children: [`Experience Virtual Tours`, (0, j.jsx)(an, { size: 13 })]
            })]
        })]
    }) : e === `more` ? (0, j.jsxs)(`div`, {
        className: `grid grid-cols-4 gap-8`,
        children: [(0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Service Areas`
            }), (0, j.jsx)(`div`, {
                className: `space-y-1.5`,
                children: ch.map(e => (0, j.jsx)(V, {
                    to: `/service-areas/${e.toLowerCase()}`,
                    onClick: n,
                    className: `block text-sm text-charcoal/80 hover:text-brass transition-colors py-0.5`,
                    children: e
                }, e))
            }), (0, j.jsxs)(V, {
                to: `/service-areas`,
                onClick: n,
                className: `inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-wider font-bold text-brass pt-1`,
                children: [`All areas`, (0, j.jsx)(an, { size: 11 })]
            })]
        }), (0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Journal & Insights`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed`,
                children: `Design trends, material guides, budget considerations, and architectural philosophy.`
            }), (0, j.jsxs)(V, {
                to: `/blog`,
                onClick: n,
                className: `inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-brass transition-colors pt-1`,
                children: [`Read Journal`, (0, j.jsx)(an, { size: 12 })]
            })]
        }), (0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Downloads & Lookbooks`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed`,
                children: `Download curated catalogs, finish specifications, and project lookbooks.`
            }), (0, j.jsxs)(V, {
                to: `/downloads`,
                onClick: n,
                className: `inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-brass transition-colors pt-1`,
                children: [`View Downloads`, (0, j.jsx)(an, { size: 12 })]
            })]
        }), (0, j.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, j.jsx)(`div`, {
                className: `eyebrow text-brass`,
                children: `Contact & Studios`
            }), (0, j.jsx)(`p`, {
                className: `text-xs text-charcoal/70 leading-relaxed`,
                children: `Reach our design offices in Hosur and Bengaluru for site visits and consultations.`
            }), (0, j.jsxs)(V, {
                to: `/contact`,
                onClick: n,
                className: `inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-charcoal hover:text-brass transition-colors pt-1`,
                children: [`Get in Touch`, (0, j.jsx)(an, { size: 12 })]
            })]
        })]
    }) : null
}

function vh() {
    let [e, t] = (0, _.useState)(!1),
        [n, r] = (0, _.useState)(!1),
        [i, a] = (0, _.useState)(null),
        o = Fo(),
        { openEnquiry: s } = bh();

    (0, _.useEffect)(() => {
        let e = () => t(window.scrollY > 40);
        return e(), window.addEventListener(`scroll`, e, { passive: !0 }), () => window.removeEventListener(`scroll`, e)
    }, []);

    (0, _.useEffect)(() => {
        r(!1);
        a(null);
    }, [o.pathname]);

    (0, _.useEffect)(() => (
        document.body.style.overflow = n ? `hidden` : ``,
        () => { document.body.style.overflow = `` }
    ), [n]);

    let c = o.pathname === `/privacy-policy` || o.pathname === `/terms`,
        l = e || i !== null || c;

    return (0, j.jsxs)(j.Fragment, {
        children: [(0, j.jsxs)(`header`, {
            className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${l ? `bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm py-3.5` : `bg-transparent py-5`}`,
            onMouseLeave: () => a(null),
            children: [(0, j.jsxs)(`div`, {
                className: `container-px max-w-[1400px] mx-auto flex items-center justify-between gap-4`,
                children: [(0, j.jsxs)(V, {
                    to: `/`,
                    className: `flex items-center gap-2 group shrink-0`,
                    onMouseEnter: () => a(null),
                    children: [(0, j.jsx)(`span`, {
                        className: `font-heading text-2xl tracking-tight transition-colors duration-300 ${l ? `text-charcoal` : `text-ivory drop-shadow-sm`}`,
                        children: `Outscale`
                    }), (0, j.jsx)(`span`, {
                        className: `font-body text-[0.6rem] uppercase tracking-[0.3em] mt-1 text-brass font-bold`,
                        children: `Interiors`
                    })]
                }), (0, j.jsx)(`nav`, {
                    className: `hidden lg:flex items-center gap-6 xl:gap-7`,
                    children: gh.map(e => {
                        let t = o.pathname === e.to || (e.to !== `/` && o.pathname.startsWith(e.to)),
                            n = i === e.mega;
                        return (0, j.jsxs)(`div`, {
                            className: `relative py-1 group cursor-pointer`,
                            onMouseEnter: () => e.mega ? a(e.mega) : a(null),
                            children: [(0, j.jsxs)(V, {
                                to: e.to,
                                className: `flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-bold transition-colors duration-200 ${l ? (t ? `text-brass` : `text-charcoal/80 hover:text-brass`) : (t ? `text-brass drop-shadow-sm` : `text-ivory/90 hover:text-brass drop-shadow-sm`)}`,
                                children: [e.label, e.mega && (0, j.jsx)(cn, {
                                    size: 11,
                                    className: `transition-transform duration-200 opacity-60 group-hover:opacity-100 ${n ? `rotate-180 text-brass` : ``}`
                                })]
                            }), t && (0, j.jsx)(`span`, {
                                className: `absolute bottom-0 left-0 right-0 h-0.5 bg-brass`
                            })]
                        }, e.label);
                    })
                }), (0, j.jsxs)(`div`, {
                    className: `hidden lg:flex items-center gap-4 shrink-0`,
                    children: [(0, j.jsxs)(`a`, {
                        href: ph(),
                        className: `flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-bold transition-colors duration-300 ${l ? `text-charcoal hover:text-brass` : `text-ivory hover:text-brass drop-shadow-sm`}`,
                        children: [(0, j.jsx)(Cn, { size: 14, className: `text-brass` }), ` Call`]
                    }), (0, j.jsx)(X, {
                        onClick: () => s({
                            source: `navbar`,
                            title: `Start your project`,
                            subtitle: `Tell us about your space and we'll prepare a tailored proposal.`
                        }),
                        size: `sm`,
                        variant: `brass`,
                        children: `Enquire`
                    })]
                }), (0, j.jsx)(`button`, {
                    className: `lg:hidden p-2 transition-colors duration-300 ${l ? `text-charcoal` : `text-ivory`}`,
                    onClick: () => r(!0),
                    "aria-label": `Open menu`,
                    children: (0, j.jsx)(xn, { size: 26 })
                })]
            }), i && (0, j.jsx)(`div`, {
                className: `hidden lg:block absolute left-0 right-0 top-full bg-ivory border-t border-sand shadow-[0_20px_40px_-20px_rgba(28,27,25,0.25)] animate-in fade-in slide-in-from-top-2 duration-200`,
                onMouseEnter: () => a(i),
                children: (0, j.jsx)(`div`, {
                    className: `container-px max-w-[1400px] mx-auto py-8`,
                    children: (0, j.jsx)(_h, {
                        type: i,
                        onClose: () => a(null)
                    })
                })
            })]
        }), (0, j.jsxs)(`div`, {
            className: `fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${n ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`}`,
            children: [(0, j.jsx)(`div`, {
                className: `absolute inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300`,
                onClick: () => r(!1)
            }), (0, j.jsxs)(`div`, {
                className: `absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ivory shadow-2xl transition-transform duration-300 ease-out flex flex-col ${n ? `translate-x-0` : `translate-x-full`}`,
                children: [(0, j.jsxs)(`div`, {
                    className: `flex items-center justify-between p-6 border-b border-sand shrink-0`,
                    children: [(0, j.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0, j.jsx)(`span`, {
                            className: `font-heading text-2xl tracking-tight text-charcoal`,
                            children: `Outscale`
                        }), (0, j.jsx)(`span`, {
                            className: `font-body text-[0.6rem] uppercase tracking-[0.3em] mt-1 text-brass font-bold`,
                            children: `Interiors`
                        })]
                    }), (0, j.jsx)(`button`, {
                        onClick: () => r(!1),
                        className: `p-1 text-charcoal/70 hover:text-charcoal transition-colors`,
                        "aria-label": `Close menu`,
                        children: (0, j.jsx)(An, { size: 24 })
                    })]
                }), (0, j.jsx)(`nav`, {
                    className: `p-6 space-y-1 overflow-y-auto flex-1`,
                    children: mobileNavLinks.map(e => {
                        let t = o.pathname === e.to;
                        return (0, j.jsx)(V, {
                            to: e.to,
                            onClick: () => r(!1),
                            className: `block py-2 font-heading text-xl transition-colors ${t ? `text-brass font-bold` : `text-charcoal hover:text-brass`}`,
                            children: e.label
                        }, e.to);
                    })
                }), (0, j.jsxs)(`div`, {
                    className: `p-6 border-t border-sand space-y-3 shrink-0 bg-sand/10`,
                    children: [(0, j.jsxs)(`a`, {
                        href: ph(),
                        className: `btn-fill flex items-center justify-center gap-2 font-body font-bold uppercase tracking-[0.12em] text-xs py-3 border border-charcoal text-charcoal hover:text-ivory bg-transparent transition-colors duration-300`,
                        children: [(0, j.jsx)(Cn, { size: 14 }), ` Call `, sh.phone]
                    }), (0, j.jsx)(X, {
                        onClick: () => {
                            r(!1);
                            s({
                                source: `mobile-navbar`,
                                title: `Start your project`,
                                subtitle: `Tell us about your space and we'll prepare a tailored proposal.`
                            });
                        },
                        variant: `brass`,
                        size: `md`,
                        className: `w-full`,
                        children: `Enquire now`
                    })]
                })]
            })]
        })]
    });
}"""

def apply():
    bundle_path = r'outscale-design-studio.base44.app/assets/index-CBLIxwrn.js'
    with open(bundle_path, 'r', encoding='utf-8') as f:
        code = f.read()

    start_marker = "var gh = [{"
    end_marker = "var yh = (0, _.createContext)(null);"

    start_idx = code.find(start_marker)
    end_idx = code.find(end_marker)

    if start_idx == -1 or end_idx == -1:
        print(f"Error finding markers: start_idx={start_idx}, end_idx={end_idx}")
        sys.exit(1)

    updated_code = code[:start_idx] + new_nav_code + "\n\n" + code[end_idx:]

    # Repair broken operator formatting artifacts
    updated_code = re.sub(r'\?\s+\?', '??', updated_code)
    updated_code = re.sub(r'\?\s+\.', '?.', updated_code)
    updated_code = re.sub(r'\|\|\s*=', '||=', updated_code)
    updated_code = re.sub(r'&&\s*=', '&&=', updated_code)
    updated_code = re.sub(r'\?\?\s*=', '??=', updated_code)
    updated_code = re.sub(r'#\s+([a-zA-Z0-9_$]+)', r'#\1', updated_code)

    with open(bundle_path, 'w', encoding='utf-8') as f:
        f.write(updated_code)

    print("Successfully applied nav updates to bundle!")

if __name__ == '__main__':
    apply()
