import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import CreateUser from "../components/create-user";

export default function Signup() {
  return (
    <div>
      <CreateUser />
    </div>
  );
}
