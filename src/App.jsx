import { Fragment } from "react";
import { useState, useEffect } from "react";

function App() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading stats...</div>;

  return (
    <Fragment>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>{" "}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bandwidth Usage Monitor</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Minified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Minified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.minified.sent)}</p>
              <p>Data Received: {formatBytes(stats.minified.received)}</p>
              <p>Total: {formatBytes(stats.minified.sent + stats.minified.received)}</p>
            </div>
          </div>

          {/* Unminified Stats */}
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-3">Unminified Build</h2>
            <div className="space-y-2">
              <p>Data Sent: {formatBytes(stats.unminified.sent)}</p>
              <p>Data Received: {formatBytes(stats.unminified.received)}</p>
              <p>Total: {formatBytes(stats.unminified.sent + stats.unminified.received)}</p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">Build Comparison</h2>
          <p>Size Reduction: {((1 - (stats.minified.sent + stats.minified.received) / (stats.unminified.sent + stats.unminified.received)) * 100).toFixed(2)}%</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

// src/utils.js
export function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
}
