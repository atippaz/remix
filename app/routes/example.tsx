import { Outlet } from "@remix-run/react";
import DefaultLayout from '~/layouts/default'
export default function Example() {
  return (
      <>
          <div className="sticky top-0 z-50 h-[60px] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="h-full flex items-center px-8">
                  <div className="flex justify-between">
                      <div>
                          <div className="flex gap-2">
                              <div>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 256 256"
                                      className="h-6 w-6"
                                  >
                                      <rect
                                          width="256"
                                          height="256"
                                          fill="none"
                                      ></rect>
                                      <line
                                          x1="208"
                                          y1="128"
                                          x2="128"
                                          y2="208"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="16"
                                      ></line>
                                      <line
                                          x1="192"
                                          y1="40"
                                          x2="40"
                                          y2="192"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="16"
                                      ></line>
                                  </svg>
                              </div>
                              <div className="font-bold ">shadcn/ui</div>
                          </div>
                      </div>
                      <div className="flex gap-6 ml-6 text-muted-foreground ">
                          <a
                              className={`${'a' === 'a' && 'hover:text-black'}`}
                              href="https://ui.shadcn.com/docs"
                          >
                              Docs
                          </a>
                          <a
                              className={`${'a' === 'a' && 'hover:text-black'}`}
                              href="https://ui.shadcn.com/docs/components"
                          >
                              Components
                          </a>
                          <a
                              className={`${'a' === 'a' && 'hover:text-black'}`}
                              href="https://ui.shadcn.com/themes"
                          >
                              Themes
                          </a>
                          <a
                              className={`${'a' === 'a' && 'hover:text-black'}`}
                              href="/example"
                          >
                              Example
                          </a>
                          <a
                              className={`${'a' === 'a' && 'hover:text-black'}`}
                              href="https://github.com/atippaz"
                          >
                              GitHub
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="p-12"></div>
          <DefaultLayout>
              <Outlet></Outlet>
          </DefaultLayout>
      </>
  )
}
