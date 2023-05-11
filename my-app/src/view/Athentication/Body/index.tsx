import React, { useState } from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import axios from "axios";

interface SummonerData {
  name: string;
  summonerLevel: number;
}

export default function Body() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerData, setSummonerData] = useState<SummonerData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get<SummonerData>(
        `/lol/summoner/v4/summoners/by-name/${summonerName}`
      );
      setSummonerData(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
      window.location.href = "/Searchin";
    }
  };

  return (
    <>
      <Box sx={{display:"flex",justifyContent:"center",mt:15}}>
        <Typography fontSize={75} >
          LoLpoint    
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
        }}
      >
        <div style={{ display: "flex" }}>
          <input
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search Summoner Name"
            style={{ width: "500px", height: "55px", fontSize: "20px" }}
          />
          <Link href={"/Searchin"}>
            <Button
              onClick={handleSearch}
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              {loading ? "Loading..." : "Search"}
            </Button>
          </Link>
        </div>
      </Box>
      {summonerData && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Name: {summonerData.name}</Typography>
          <Typography variant="subtitle1">
            Level: {summonerData.summonerLevel}
          </Typography>
        </Box>
      )}
    </>
  );
}