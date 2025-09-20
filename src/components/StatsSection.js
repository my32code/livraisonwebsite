import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    clients_satisfaits: 0,
    marchandises_livrees: 0,
    heures_bureau: 100
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/stats');
      if (response.ok) {
        const data = await response.json();
        setStats({
          clients_satisfaits: data.clients_satisfaits || 0,
          marchandises_livrees: data.marchandises_livrees || 0,
          heures_bureau: data.heures_bureau || 100
        });
      } else {
        console.error('Erreur lors du chargement des statistiques');
      }
    } catch (error) {
      console.error('Erreur de connexion à l\'API:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsData = [
    {
      icon: "/assets/img/icons/clients.png",
      number: loading ? "..." : `${stats.clients_satisfaits}+`,
      label: "Des clients satisfaits"
    },
    {
      icon: "/assets/img/icons/goods.png",
      number: loading ? "..." : `${stats.marchandises_livrees}+`,
      label: "Marchandises livrées"
    },
    {
      icon: "/assets/img/icons/business.png",
      number: loading ? "..." : `${stats.heures_bureau}+`,
      label: "Heures de bureau"
    }
  ];

  return (
    <section className="pt-7 pb-0">
      <div className="container">
        <div className="row">
          {statsData.map((stat, index) => (
            <div key={index} className="col-6 col-lg mb-5">
              <div className="text-center">
                <img src={stat.icon} alt="..." />
                <h1 className="text-primary mt-4">{stat.number}</h1>
                <h5 className="text-800">{stat.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
