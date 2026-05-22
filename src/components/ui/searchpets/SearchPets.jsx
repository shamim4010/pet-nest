"use client";
import { Button, Form, SearchField, Spinner } from "@heroui/react";
import React, { useState } from "react";

function SearchPets({ setSearch }) {
    const [value, setValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const MIN_LENGTH = 3;
    const isInvalid = value.length > 0 && value.length < MIN_LENGTH;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length < MIN_LENGTH) {
            return;
        }
        setIsSubmitting(true);

        setTimeout(() => {
            console.log("Search submitted:", { query: value });
            setIsSubmitting(false);
        }, 1500);
    };
    
    return (
        <Form className="flex glass-level-3 lg:w-180 flex-wrap  rounded-4xl md:rounded-full justify-center items-center gap-4 p-4 mx-auto my-12 transition-all duration-400 ease-in-out" onSubmit={handleSubmit}>
            <SearchField isRequired isInvalid={isInvalid} name="search" value={value} onChange={setValue}>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-full" placeholder="Search products..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            <Button
                onClick={() => setSearch(value)}
                className=""
                isDisabled={value.length < MIN_LENGTH}
                isPending={isSubmitting}
                type="submit"
                variant="primary"
            >
                {isSubmitting ? (
                    <>
                        <Spinner color="current" size="sm" />
                        Searching...
                    </>
                ) : (
                    "Search"
                )}
            </Button>
            <fieldset className="rounded-md bg-white">
                <select className="select bg-white w-full">
                    <option onClick={() => setSearch('')}>All Pets</option>
                    <option onClick={() => setSearch('dog')}>Dog</option>
                    <option onClick={() => setSearch('cats')}>Cats</option>
                    <option onClick={() => setSearch('others')}>Others</option>
                </select>
            </fieldset>
        </Form>
    );
}

export default SearchPets