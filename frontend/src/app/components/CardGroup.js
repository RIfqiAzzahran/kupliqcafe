import React from "react";
import Image from "next/image";
import Button from "./Button";

const CardGroup = () => {
    return (
        <>
            <div>
                <div className="mx-auto">
                    <h3 className="text-3xl text-black">Enjoy a new blend of coffee style</h3>
                    <h5 className="text-black mt-5">Explore all flavours of coffee with us. There is always a new cup worth experiencing</h5>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap gap-10">
                        <div className="border-1 border-color rounded-md">
                            <Image
                                src="/images/img_rectangle_7.png"
                                alt="Coffee cup made of beans"
                                width={250}
                                height={250}
                                className="rounded-tr-md rounded-tl-md"
                            />
                            <h4 className="text-black">Cappucino</h4>
                            <p className="text-black">Coffee 50% | Milk 50%</p>
                            <p className="text-black">23K</p>
                            <Button className="mt-2 mb-3"label="Order Now" navigateTo="/menu"/>
                        </div>
                        <div className="border-1 border-color rounded-md">
                            <Image
                                src="/images/img_rectangle_7.png"
                                alt="Coffee cup made of beans"
                                width={250}
                                height={250}
                                className="rounded-tr-md rounded-tl-md"
                            />
                            <h4 className="text-black">Cappucino</h4>
                            <p className="text-black">Coffee 50% | Milk 50%</p>
                            <p className="text-black">23K</p>
                            <Button className="mt-2 mb-3"label="Order Now" navigateTo="/menu"/>
                        </div>
                        <div className="border-1 border-color rounded-md">
                            <Image
                                src="/images/img_rectangle_7.png"
                                alt="Coffee cup made of beans"
                                width={250}
                                height={250}
                                className="rounded-tr-md rounded-tl-md"
                            />
                            <h4 className="text-black">Cappucino</h4>
                            <p className="text-black">Coffee 50% | Milk 50%</p>
                            <p className="text-black">23K</p>
                            <Button className="mt-2 mb-3"label="Order Now" navigateTo="/menu"/>
                        </div>
                        <div className="border-1 border-color rounded-md">
                            <Image
                                src="/images/img_rectangle_7.png"
                                alt="Coffee cup made of beans"
                                width={250}
                                height={250}
                                className="rounded-tr-md rounded-tl-md"
                            />
                            <h4 className="text-black">Cappucino</h4>
                            <p className="text-black">Coffee 50% | Milk 50%</p>
                            <p className="text-black">23K</p>
                            <Button className="mt-2 mb-3"label="Order Now" navigateTo="/menu"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardGroup;