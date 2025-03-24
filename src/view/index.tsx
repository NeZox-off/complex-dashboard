"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Checkbox, Icon, Input, Label } from "../components/ui";

interface AuthProps {}

const Auth = ({}: AuthProps) => {
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  return (
    <section className="py-14">
      <div className="container px-16 mx-auto w-full">
        <div className="flex items-center">
          <div>
            <div className="max-w-[34.375rem]">
              <h1 className="text-7xl max-w-[29.188rem]">
                Nexery - control panel
              </h1>
              <p className="text-2xl text-white/40">
                Access to tools and settings for effective management.
              </p>
            </div>
            <Image
              src={"/svg/large-logo.svg"}
              alt="Nexery logo"
              width={260}
              height={162}
            />
          </div>
          <form>
            <div>
              <div>
                <div>
                  <h2>Log in</h2>
                  <p>Welcome back!</p>
                </div>
                <div>
                  <Label>
                    Email
                    <Input />
                  </Label>
                  <Label>
                    <div>
                      Password
                      <span>
                        {isHiddenPass ? (
                          <>
                            <Icon name="Eye" />
                            Hide
                          </>
                        ) : (
                          <>
                            <Icon name="EyeClosed" />
                            Show
                          </>
                        )}
                      </span>
                    </div>
                    {isHiddenPass ? <Input /> : <Input />}
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                      Accept terms and conditions
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <Button>Login</Button>
                <span>Forgot your password?</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
