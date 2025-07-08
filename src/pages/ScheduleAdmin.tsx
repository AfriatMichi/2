import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

interface Shiur {
  id?: string;
  day: string;
  time: string;
  topic: string;
  location: string;
}

const emptyShiur: Shiur = {
  day: "",
  time: "",
  topic: "",
  location: "",
};

const ScheduleAdmin = () => {
  const [shiurim, setShiurim] = useState<Shiur[]>([]);
  const [form, setForm] = useState<Shiur>(emptyShiur);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch all shiurim from Firestore
  const fetchShiurim = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "Shiurim"));
    const data: Shiur[] = [];
    querySnapshot.forEach((docSnap) => {
      data.push({ id: docSnap.id, ...(docSnap.data() as Shiur) });
    });
    setShiurim(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchShiurim();
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update shiur
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.day || !form.time || !form.topic || !form.location) return;
    setLoading(true);
    if (editId) {
      // Update
      await updateDoc(doc(db, "Shiurim", editId), {
        day: form.day,
        time: form.time,
        topic: form.topic,
        location: form.location,
      });
    } else {
      // Add
      await addDoc(collection(db, "Shiurim"), form);
    }
    setForm(emptyShiur);
    setEditId(null);
    fetchShiurim();
  };

  // Edit shiur
  const handleEdit = (shiur: Shiur) => {
    setForm({ day: shiur.day, time: shiur.time, topic: shiur.topic, location: shiur.location });
    setEditId(shiur.id!);
  };

  // Delete shiur
  const handleDelete = async (id: string) => {
    setLoading(true);
    await deleteDoc(doc(db, "Shiurim", id));
    fetchShiurim();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">ניהול לוח שיעורים</h1>
      <form onSubmit={handleSubmit} className="space-y-2 bg-gray-50 p-4 rounded shadow mb-6">
        <div className="flex gap-2 flex-wrap justify-between">
          <input
            name="day"
            value={form.day}
            onChange={handleChange}
            placeholder="יום"
            className="border p-2 rounded w-24 text-right"
            required
          />
          <input
            name="time"
            value={form.time}
            onChange={handleChange}
            placeholder="שעה"
            className="border p-2 rounded w-24 text-right"
            required
          />
          <input
            name="topic"
            value={form.topic}
            onChange={handleChange}
            placeholder="נושא"
            className="border p-2 rounded flex-1 text-right"
            required
          />
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="מיקום"
            className="border p-2 rounded flex-1 text-right"
            required
          />
        </div>
        <div className="flex gap-2 justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {editId ? "עדכן שיעור" : "הוסף שיעור"}
          </button>
          {editId && (
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              onClick={() => { setForm(emptyShiur); setEditId(null); }}
            >
              ביטול
            </button>
          )}
        </div>
      </form>
      <div>
        {loading ? (
          <div className="text-center">טוען...</div>
        ) : (
          <table className="w-full border text-right">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">יום</th>
                <th className="p-2">שעה</th>
                <th className="p-2">נושא</th>
                <th className="p-2">מיקום</th>
                <th className="p-2">פעולות</th>
              </tr>
            </thead>
            <tbody>
              {shiurim.map((shiur) => (
                <tr key={shiur.id} className="border-t">
                  <td className="p-2">{shiur.day}</td>
                  <td className="p-2">{shiur.time}</td>
                  <td className="p-2">{shiur.topic}</td>
                  <td className="p-2">{shiur.location}</td>
                  <td className="p-2 flex gap-2 justify-end">
                    <button
                      className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                      onClick={() => handleEdit(shiur)}
                    >
                      ערוך
                    </button>
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      onClick={() => handleDelete(shiur.id!)}
                    >
                      מחק
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ScheduleAdmin; 