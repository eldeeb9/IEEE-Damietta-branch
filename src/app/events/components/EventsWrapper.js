"use client";
import { useEffect, useMemo, useState } from "react";
import EventCard from "./EventCard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { CiSearch } from "react-icons/ci";
import SelectInput from "./SelectInput";

const EventsWrapper = ({ events }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortValue, setSortValue] = useState("latest");

  console.log(events)

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    let result = [...events];

    if (query) {
      result = result.filter((event) =>
        [event.title, event.description, event.location_details].some((value) =>
          value.toLowerCase().includes(query),
        ),
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((event) => event.status === statusFilter);
    }

    switch (sortValue) {
      case "oldest":
        result.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
        break;
      default:
        result.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    }

    return result;
  }, [events, search, statusFilter, sortValue]);

  return (
    <>
      <div className="flex justify-between md:py-8 py-4 flex-wrap flex-col-reverse md:flex-row gap-3">
        <div className="gap-3 flex md:w-auto w-full">
          <SelectInput
            value={sortValue}
            handleValueChange={setSortValue}
            options={[{
              value: "latest",
              label: "Latest",
            }, {
              value: "oldest",
              label: "Oldest",
            }]}
          />
        </div>

        <div className="md:w-auto w-full mt-4 md:mt-0 ml-auto">
          <InputGroup className="py-4.5 md:w-[250px] w-full">
            <InputGroupInput
              placeholder="Search..."
              onChange={handleSearch}
              value={search}
            />
            <InputGroupAddon>
              <CiSearch />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div className="cards_container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {filteredEvents.map((event) => {
          return (
            <EventCard
              key={event.id}
              title={event.title}
              startDate={event.start_date}
              description={event.description}
              locationDetails={event.location_details}
              capacity={event.capacity}
              image={event.image}
              eventLink={event.event_link}
            />
          );
        })}
      </div>
    </>
  );
};

export default EventsWrapper;
